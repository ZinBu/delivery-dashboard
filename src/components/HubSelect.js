import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 300,
  },
}));


export const HubSelect = (props) => {
   const labelName = 'Выбор ТК'
   const classes = useStyles()
   const [hub, setHub] = React.useState('')

   const handleChange = (event) => {
       setHub(event.target.value)
       props.handleChange(event.target.value)
   }
   // TODO Is it correct to set an object in a "value" instead of ID for instance?
   const options = [
      <MenuItem key='0' value="">Не выбран</MenuItem>,
      ...props.hubs.map(
          (hub, index) => <MenuItem key={index + 1} value={hub}>{hub.name}</MenuItem>
      )
   ]
   return (
       // TODO Autocomplete will be better
       <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="hubs-label">{labelName}</InputLabel>
            <Select
                id='hubs'
                labelId='hubs-label'
                label={labelName}
                onChange={handleChange}
                value={hub}
            >
              {options}
            </Select>
          </FormControl>
       </div>
   )
}


HubSelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    hubs: PropTypes.array,
};

