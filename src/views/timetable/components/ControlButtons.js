import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { labelAlertsTypes } from '../../../components/SnackBar';

export default function ControlButtonsPanel(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseWithYes = () => {
    setOpen(false);
    props.raiseLabel("Available only by VIP subscription!", 2000, labelAlertsTypes.ERROR);
  };

  return (
    <>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleClickOpen} >????</Button>
        <Button onClick={() => props.raiseLabel("Pew-pew", 2000, labelAlertsTypes.SUCCESS)} >Pew</Button>
        <Button onClick={() => props.raiseLabel("Joyful rumbling...", 3000, labelAlertsTypes.SUCCESS)} >Praise</Button>
      </ButtonGroup>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle >{"Do something?"}</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Something might happen
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleCloseWithYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
