import React from "react";
import moment from "moment";
import Box from '@material-ui/core/Box';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
  TimelineMarkers,
  TodayMarker,
} from "react-calendar-timeline";
import 'react-calendar-timeline/lib/Timeline.css';
import Container from "@material-ui/core/Container";
import { HubForm } from "../../components/Forms";
import { labelAlertsTypes } from "../../components/SnackBar";
import { TimeboardDrawer } from "./utils/TableTools";
import { Legend } from "./components/Legend";
import { createScopesSettings, defaultScopeKey, ZoomMeta } from "./components/ScopeSlider";
import {GroupRenderer, TabsInfoAlert} from "./components/ItemTabsInfo";
import { ButtonsFilterGroup } from "./components/TableViewFilters";
import InfoDatePicker from "./components/DatePicker";
import {getTimeboardData} from "../../tools/api";
import {messages} from "../../choices/Extra";
import ControlButtonsPanel from "./components/ControlButtons";


export const Timetable = props => {
    // Date picker
    const [selectedDate, setSelectedDate] = React.useState(moment());
    // Table scope
    const scopesSettings = createScopesSettings(selectedDate);
    const [tableTimeStart, setTableTimeStart] = React.useState(scopesSettings[defaultScopeKey][0]);
    const [tableTimeEnd, setTableTimeEnd] = React.useState(scopesSettings[defaultScopeKey][1]);

    // Table filters settings
    const [cancelledHidden, setCancelledHidden] = React.useState(true);
    const [plannedRowEnabled, setPlannedRow] = React.useState(false);

    const [selectedHubData, setSelectedHubData] = React.useState(null);
    // Use it for destroying table before another request todo change to "visible" state later
    const [currentHubTableId, setTableId] = React.useState(null);
    const rawData = React.useRef(null)
    const [timeboardGroups, setGroups] = React.useState([]);
    const [timeboardItems, setItems] = React.useState([]);
    // For selected items on the table
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState(null);
    const [selectedResource, setSelectedResource] = React.useState(null);

    React.useEffect(
        () => {
            if (rawData.current) {
                drawTimetable(rawData.current);
            }
        },
        [cancelledHidden, plannedRowEnabled]
    );

    React.useEffect(
        () => {
            const scopesSettings = createScopesSettings(selectedDate);
            setTableTimeStart(scopesSettings[defaultScopeKey][0]);
            setTableTimeEnd(scopesSettings[defaultScopeKey][1]);
        },
        [selectedDate]
    );

    const setCardInfo = (resource, task) => {
      setAlertVisible(true)
      setSelectedResource(resource);
      setSelectedTask(task);
    };

    const drawTimetable = hubTimetableData => {
          if (hubTimetableData.length < 1) {
            props.raiseLabel(messages.noData, 2000, labelAlertsTypes.WARNING);
            return
          }
          const timeboardDrawer = new TimeboardDrawer(setCardInfo, cancelledHidden, plannedRowEnabled);
          timeboardDrawer.addPickers(hubTimetableData.pickers);
          timeboardDrawer.addCouriers(hubTimetableData.couriers);
          timeboardDrawer.addTaxis(hubTimetableData.taxis);
          const [groups, items] = timeboardDrawer.getTimeboardData();

          if (groups.length < 1) {
            props.raiseLabel(messages.noData, 2000, labelAlertsTypes.WARNING);
            return
          }
          setGroups(groups);
          setItems(items);
          setTableId(selectedHubData.id);
    };

    const requestTimeboardData = finallyAction => {
      setCardInfo(null, null);
      getTimeboardData(selectedHubData.id, selectedDate)
        .then(result => result.data)
        .then(result => {
          rawData.current = result;
          drawTimetable(result);
        })
        .catch(error => {
          console.log(error);
          props.raiseLabel(messages.error, 2000, labelAlertsTypes.ERROR)
        })
        // todo To know how to use finally chain in a children with its state properly
        .finally(finallyAction)
    };

    const isTableFilled = () => timeboardGroups.length > 0;

    const isTableSelectedNow = () => selectedHubData.id === currentHubTableId;

    const tableVisible = isTableFilled() && isTableSelectedNow();

    const infoLabelVisible = selectedTask && isTableSelectedNow();

    return (
       <Container maxWidth="xl">
          {/* Block with the hub select, the info card and the legend */}
          <Box display='flex' justifyContent='space-between' marginBottom={5} >
            <Box display='flex' justifyContent='space-between'>
              <HubForm
                  raiseLabel={props.raiseLabel}
                  setHubSelect={(selectedHub) => setSelectedHubData(selectedHub)}
                  queryOnClick={requestTimeboardData}
                  // requestPeriod={60 * 1000}  // todo It breaks InfoCard
              />
              <Box marginLeft={3}>
                <InfoDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              </Box>
            </Box>
            {
              infoLabelVisible ?
                (
                  <TabsInfoAlert
                    task={selectedTask}
                    resource={selectedResource}
                    alertVisible={alertVisible}
                    onCloseAction={() => setAlertVisible(false)}
                  />
                )
                : null}
            <Legend />
          </Box>
          {/* Control panel */}
          <Box display='flex' justifyContent='space-between' marginBottom={2}>
            {
                tableVisible ?
                    (
                        <Box display='flex' justifyContent='space-between' >
                          <ZoomMeta raiseLabel={props.raiseLabel} />
                          <ButtonsFilterGroup
                            buttons={[
                              {
                                text: 'cancelled',
                                onClick: () => setCancelledHidden((prev) => !prev),
                                checked: !cancelledHidden
                              },
                              {
                                text: 'plan',
                                onClick: () => setPlannedRow((prev) => !prev),
                                checked: plannedRowEnabled
                              },
                            ]}
                          />
                        </Box>
                    )
                    : null
            }
            {infoLabelVisible ? <ControlButtonsPanel raiseLabel={props.raiseLabel} /> : null}
          </Box>
          {/* Timetable */}
          {
            (tableVisible) ?
            <CustomizedTimeline
              groups={timeboardGroups}
              items={timeboardItems}
              defaultTimeStart={tableTimeStart}
              defaultTimeEnd={tableTimeEnd}
            /> : null
          }
      </Container>
    )
}


const stickyStyle = {
  position: 'sticky',
  top: '4em',
  zIndex: 500,
  background: '#2049c5bd'
}

const CustomizedTimeline = props => {

  const groupRenderer = ({ group }) => <GroupRenderer group={group}/>

  return (
    < Timeline
      {...props}
      canMove = {false}
      canResize = {false}
      sidebarWidth = {250}
      stackItems
      groupRenderer={groupRenderer}
    >
      <TimelineHeaders style={stickyStyle}>
        <SidebarHeader>
          {({ getRootProps }) => {
            return <div {...getRootProps()}> </div>;
          }}
        </SidebarHeader>
        <DateHeader unit="primaryHeader" />
        <DateHeader />
      </TimelineHeaders>
      <TimelineMarkers>
        <TodayMarker />
      </TimelineMarkers>
    </Timeline>
  )
};
