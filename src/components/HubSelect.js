import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const labelName = 'Choose Hub'

export const HubSelect = (props) => {
   const [hub, setHub] = React.useState(null)

   const handleChange = (_, value) => {
       setHub(value)
       props.handleChange(value ? value: "")
   }
   return (
       <Autocomplete
        id="hubs"
        options={props.hubs}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(options) => <TextField {...options} label={labelName} variant="outlined" />}
        onChange={handleChange}
        value={hub}
        getOptionSelected={(option, value) => option.id === value.id}
      />
   )
}


HubSelect.propTypes = {
    handleChange: PropTypes.func.isRequired,
    hubs: PropTypes.array,
};
