
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import { green, red } from '@material-ui/core/colors'


export const OrderStatesChoice = {
    WIP: "WIP",
    FINISHED: "FINISHED",
    CANCELED: "CANCELED"
}


export const orderStatuses = {
    [OrderStatesChoice.WIP]: <div style={{borderRadius: '5px'}} title="In progress.."><AccessTimeTwoToneIcon color="primary"/></div>,
    [OrderStatesChoice.FINISHED]: <div title="Completed"><CheckCircleTwoToneIcon style={{ color: green[500] }} /></div>,
    [OrderStatesChoice.CANCELED]: <div title="Cancelled"><CancelTwoToneIcon style={{ color: red[700] }} /></div>
};
  