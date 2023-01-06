import {itemsStyles, itemsTypes, itemsTypesRus} from "./Styles";
import {OrderStatesChoice} from "../../../choices/Orders";

class TimeboardMeta {
  constructor(cardInfoSetter, cancelledOrdersHidden, plannedRowEnabled) {
    this.itemTouchAction = cardInfoSetter;
    this.cancelledHidden = cancelledOrdersHidden;
    this.plannedRowEnabled = plannedRowEnabled;
    this.dtNow = Date.now();
    this.uniteTaxiByProvider = true;
  };
}

export class TimeboardDrawer {
  constructor(cardInfoSetter, cancelledOrdersHidden, plannedRowEnabled) {
    this._meta = new TimeboardMeta(cardInfoSetter, cancelledOrdersHidden, plannedRowEnabled);
    this._uniqueGroups = {};
    this._pickers = null;
    this._couriers = null;
    this._taxis = null;
    this.groups = [];
    this.items = [];
  };

  addPickers(pickers) {
    this._pickers = pickers;
  };

  addCouriers(couriers) {
    this._couriers = couriers;
  };

  addTaxis(taxis) {
    this._taxis = taxis;
  };

  getTimeboardData() {
    this._processPickers()
    this._processCouriers()
    this._processTaxis()
    for (const key in this._uniqueGroups) {
      const rs = this._uniqueGroups[key];
      this.groups.push({id: key, title: rs.title, resource: rs.resource});
    }
    return [this.groups, this.items]
  };

  _addItemsAndGroups(groups, items) {
    this._uniqueGroups = {...this._uniqueGroups, ...groups};
    this.items = [...this.items, ...items]
  };

  _processPickers() {
    if (!this._pickers) {
      return
    }
    const [groups, items] = this._processResources(this._pickers, itemsTypes.PICKER);
    this._addItemsAndGroups(groups, items);
  };

  _processCouriers() {
    if (!this._couriers) {
      return
    }
    const [groups, items] = this._processResources(this._couriers, itemsTypes.COURIER);
    this._addItemsAndGroups(groups, items);
  };

  _processTaxis() {
    if (!this._taxis) {
      return
    }
    const [groups, items] = this._processResources(this._taxis, itemsTypes.TAXI);
    this._addItemsAndGroups(groups, items);
  };

  _processResources = (resources, rsType) => {
    const processor = new ResourceProcessor(resources, rsType, this._meta)
    return processor.process()
  };
}

class ResourceProcessor {
  planPostfix = '(plan)';

  constructor(resources, rsType, meta) {
    this._meta = meta;
    this.resources = resources;
    this.rsType = rsType;
    this.groups = {};
    this.items = [];
  };

  process() {
    this.resources.forEach(
      (resource) => {
        if (this._isNeedToShow(resource)) {
          this._setResourceTimeBlocks(resource);
          // Need to draw an additional row with only planning timings
          if (this._meta.plannedRowEnabled) {
            this._setResourceTimeBlocks(resource, true);
          }
        }
      }
    );
    return [this.groups, this.items]
  };

  _isNeedToShow(resource) {
    return resource.tasks.length > 0 || (resource.enabled && !resource.dummy)
  };

  _setLunchOrSmokeBreak(resource, groupId, eventType, eventStart, eventEnd) {
    const endTime = Date.parse(eventEnd);
      this.items.push(
        {
          id: `${groupId}${eventType}`,
          group: groupId,
          title: itemsTypesRus[eventType],
          start_time: Date.parse(eventStart),
          end_time: endTime,
          itemProps: {
            style: this._getEventStyle(endTime, itemsStyles[eventType]),
            onMouseDown: () => this._meta.itemTouchAction(null, null)
          }
        }
      )
  };

  _setResourceTimeBlocks = (resource, needPlannedOnly = false) => {
    let groupId = (
      (this.rsType === itemsTypes.TAXI && this._meta.uniteTaxiByProvider)
        ? resource.name
        : `${this.rsType[0]}${resource.id}`
    );
    groupId = needPlannedOnly ? `${groupId}_1` : groupId;
    this.groups[groupId] = {
      title: needPlannedOnly ? `${resource.name} ${this.planPostfix}` : resource.name,
      resource: {type: this.rsType, ...resource}
    };
    // Set lunch block
    if (resource.lunchTimeStart) {
      this._setLunchOrSmokeBreak(resource, groupId, itemsTypes.LUNCH, resource.lunchTimeStart, resource.lunchTimeEnd);
    }
    // Set smoke break block
    if (resource.smokeBreakStart) {
      this._setLunchOrSmokeBreak(resource, groupId, itemsTypes.SMOKEBREAK, resource.smokeBreakStart, resource.smokeBreakEnd);
    }
    // Set task blocks
    resource.tasks.forEach((task) => this._setTaskBlocks(groupId, resource, task, needPlannedOnly));
  };

  _setTaskBlocks = (groupId, resource, task, needPlannedOnly) => {
    if (this._meta.cancelledHidden && task.state === OrderStatesChoice.CANCELED) {
      return
    }
    const [startTime, endTime] = this._defineTasksBlockTiming(task, needPlannedOnly);
    this.items.push(
      {
        id: `t${task.id}g${groupId}`,
        group: groupId,
        title: `${task.orders.map((order) => `${order.reserveKey} `)}`,
        start_time: startTime,
        end_time: endTime,
        itemProps: {
          ...{
            // todo Change event to onSelected
            onMouseDown: () => this._meta.itemTouchAction(
              {
                id: resource.id,
                dummy: resource.dummy,
                enabled: resource.enabled,
                kpp: resource.siteKppNum,
                name: resource.name,
                type: this.rsType,
                windowOpen: resource.windowOpen,
                windowClose: resource.windowClose,
              },
              task
            )
          },
          ...{style: this._getEventStyle(endTime, itemsStyles[this.rsType])}
        }
      }
    )
  };

  _defineTasksBlockTiming(task, needPlannedOnly) {
    let startTime;
    let endTime;
    if (needPlannedOnly) {
      startTime = Date.parse(task.start);
      endTime = Date.parse(task.finish);
    } else {
      startTime = Date.parse(task.factStart || task.start);
      endTime = Date.parse(task.factFinish || task.finish);
      if (endTime <= startTime) {
        // In case when dates aren't reasonable
        startTime = Date.parse(task.start);
        endTime = Date.parse(task.finish);
      }
    }
    return [startTime, endTime]
  };

  // Returns grey block style if the event has passed
  _getEventStyle = (eventEndTime, requiredStyle) => (
    this._meta.dtNow > eventEndTime ? requiredStyle.passed : requiredStyle.actual
  );
}
