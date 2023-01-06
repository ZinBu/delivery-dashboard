import React from 'react';
import moment from "moment";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { orderStatuses } from '../../../choices/Orders';
import { itemsTypes } from '../utils/Styles';
import { objectStates } from '../../../choices/Extra';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 700,
    borderRadius: 3
  },
  flexbox: {
    display: 'flex',
    'justify-content': 'space-between'
  },
  dialog: {
    padding: 'unset'
  }
}));


export default function ItemTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Task" {...a11yProps(0)} />
          <Tab label="Performer" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <TaskInfo task={props.task} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PerformerInfo resource={props.resource} />
      </TabPanel>
    </div>
  );
};

export const TabsInfoAlert = props => {
  const classes = useStyles();
  const {onCloseAction, alertVisible, ...otherProps} = props

  return <Dialog
    disableRestoreFocus
    open={alertVisible}
    onClose={onCloseAction}
    maxWidth="md"
  >
    <DialogContent classes={{ root: classes.dialog }} >
      <ItemTabs {...otherProps} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onCloseAction} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
};

const createPrettyDatetime = (isoDatetime, format = "hh:mm") => {
  if (!isoDatetime) {
      return '?'
  }
  return moment(Date.parse(isoDatetime)).format(format);
};

const FlexBox = props => {
  const classes = useStyles();
  return (
    <Box className={classes.flexbox} >
      {props.children}
    </Box>
  )
};

const FadedText = props => <Typography color="textSecondary" gutterBottom>{props.children}</Typography>;

const InvestigateAnchor = props => (
  <a
    href={`${location.origin}${props.url}`}
    target="_blank"
    style={props.decoration ? {} : {textDecoration: "none", color: "black"}}
  >
    {props.children}
  </a>
);

const PickerAnchor = props => (
        <InvestigateAnchor url={`/picker/${props.id}`} decoration={props.decoration}>
    {props.title}
  </InvestigateAnchor>
);

const CourierAnchor = props => (
        <InvestigateAnchor url={`/courier/${props.id}`} decoration={props.decoration}>
    {props.title}
  </InvestigateAnchor>
);

const createInvestigateAnchor = (rsType, rsId, linkTitle, decoration = true) => {
  const anchorProps = {id: rsId, title: linkTitle, decoration: decoration};
  return rsType === 'courier' ? <CourierAnchor {...anchorProps} /> : <PickerAnchor {...anchorProps} />
};

const TaskInfo = props => (
  <>
    <FlexBox>
      <FadedText>ID:</FadedText>
      <Typography>{props.task.id}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Status:</FadedText>
      <Typography>{props.task.state}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Created:</FadedText>
      <Typography>{createPrettyDatetime(props.task.createdAt)}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Planned:</FadedText>
      <Typography>{createPrettyDatetime(props.task.start)} - {createPrettyDatetime(props.task.finish)}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Fact:</FadedText>
      <Typography>{createPrettyDatetime(props.task.factStart)} - {createPrettyDatetime(props.task.factFinish)}</Typography>
    </FlexBox>
    <FadedText>Orders:</FadedText>
    {
      props.task.orders.map(
          (order) => (
          <FlexBox key={order.reserveKey}>
            <FadedText>
              №:
              <InvestigateAnchor url={`/order/${order.reserveKey}`} decoration>
                {order.reserveKey}
              </InvestigateAnchor>
            </FadedText>
            <FlexBox>
              <FadedText>Status:</FadedText>
              {orderStatuses[order.state]}
            </FlexBox>
            <FadedText>Type: {order.orderType}</FadedText>
            <FlexBox>
              <FadedText>Promise:</FadedText>
              <Typography>⠀{createPrettyDatetime(order.promiseStart)} - {createPrettyDatetime(order.promiseFinish)}</Typography>
            </FlexBox>
          </FlexBox>
        )
      )
    }
  </>
);

const PerformerInfo = props => (
  <>
    <FlexBox>
      <FadedText>ID:</FadedText>
      <Typography>
        { props.resource.id !== 0 ? createInvestigateAnchor(props.resource.type, props.resource.id, props.resource.id) : "Auction" }
      </Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Type:</FadedText>
      <Typography>{props.resource.type}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>Name:</FadedText>
      <Typography>{props.resource.name || "-"}</Typography>
    </FlexBox>
    <FlexBox>
      <FadedText>{props.resource.type === itemsTypes.TAXI ? 'RequestID' : 'Personal number'}:</FadedText>
      <Typography>{props.resource.kpp || "-"}</Typography>
    </FlexBox>
    {props.resource.type !== itemsTypes.TAXI ? <ExtraResourceInfo resource={props.resource} />: null}
  </>
);


const ExtraResourceInfo = props => (
  <>
      <FlexBox>
        <FadedText>Newbee:</FadedText>
        {objectStates[props.resource.dummy]}
      </FlexBox>
      <FlexBox>
        <FadedText>Enabled:</FadedText>
        {objectStates[props.resource.enabled]}
      </FlexBox>
      <FlexBox>
        <FadedText>Working time:</FadedText>
        <Typography>{createPrettyDatetime(props.resource.windowOpen)} - {createPrettyDatetime(props.resource.windowClose)}</Typography>
      </FlexBox>
  </>
);


export const GroupRenderer = ({ group }) => {
  const {title, resource} = group;
  const workingPeriod = `${createPrettyDatetime(resource.windowOpen)}-${createPrettyDatetime(resource.windowClose)}`;
  const rsTitle = <span title={workingPeriod}>{title}</span>;
  return (
    <div className="custom-group">
      { resource.id !== 0 ? createInvestigateAnchor(resource.type, resource.id, rsTitle, false) : <a>{rsTitle}</a> }
    </div>
  )
};
