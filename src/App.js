import React from 'react';
import Dashboard from './views/dashboard/Dashboard';
import PersistentDrawerLeft from './Sidebar';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TimelapseOutlinedIcon from '@material-ui/icons/TimelapseOutlined';
import { Timetable } from "./views/timetable/Timetable";
import SnackbarInfo, {labelAlertsTypes} from "./components/SnackBar";

const App = () => {
    const [labelText, setLabelText] = React.useState(null);
    const [labelVisible, setLabelVisible] = React.useState(false);
    const [labelAlertType, setLabelAlertType] = React.useState(labelAlertsTypes.INFO);

    const raiseLabel = (text, showTime=2000, labelType=labelAlertsTypes.INFO) => {
      setLabelText(text);
      setLabelVisible(true);
      setLabelAlertType(labelType);
      setTimeout(() => setLabelVisible(false), showTime)
    }

    const routes = [
      {
          component: <Dashboard raiseLabel={raiseLabel} />,
          link: '/superdash',
          panel: {
              name: 'Dashboard', 
              icon: <DashboardOutlinedIcon />
          },
      },
      {
          component: <Timetable raiseLabel={raiseLabel} />,
          link: '/timetable',
          panel: {
              name: 'Timetable',
              icon: <TimelapseOutlinedIcon />
          }
      }
    ]

    return (
      <>
        <PersistentDrawerLeft routes={routes} />
        <SnackbarInfo
            msg={labelText}
            labelVisible={labelVisible}
            labelType={labelAlertType}
            makeInvisible={() => setLabelVisible(false)}
        />
    </>
    )
}

export default App
