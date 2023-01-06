import React from 'react';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function InfoDatePicker(props) {
  const {selectedDate, setSelectedDate} = props;

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale="en">
        <KeyboardDatePicker
          disableToolbar
          margin="normal"
          variant="normal"
          id="date-picker-dialog"
          label="Choose date"
          format="DD-MM-yyyy"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}
