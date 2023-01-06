import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { green, red } from '@material-ui/core/colors'

export const messages = {
  indignation: "Take the pills!",
  error: "Error!",
  noData: "No data!"
};

export const objectStates = {
  [true]: <div title="Да"><FiberManualRecordIcon style={{ color: green[500] }} /></div>,
  [false]: <div title="Нет"><FiberManualRecordIcon style={{ color: red[700] }} /></div>
};
  