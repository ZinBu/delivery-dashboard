import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export const labelAlertsTypes = {
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning'
}

const clickWay = 'clickaway'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export default function SnackbarInfo(props) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === clickWay) {
      return;
    }
    props.makeInvisible()
  };

  return (
    <div className={classes.root}>
      <Snackbar open={props.labelVisible} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.labelType || labelAlertsTypes.INFO}>
          {props.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
