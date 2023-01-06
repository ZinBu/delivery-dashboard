import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StopIcon from '@material-ui/icons/Stop';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';
import { itemsStyles, itemsTypesRus } from '../utils/Styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  legendBlock: {
    display: 'inline-flex',
    alignItems: 'center'
  }
}));

// Collect all timeboard itams and colors
let legendItems = [];
for (const [itemName, itemRusName] of Object.entries(itemsTypesRus)) {
  legendItems.push({name: itemRusName, color: itemsStyles[itemName].actual.background});
}

export const Legend = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} color="primary" />}
        label="?"
      />
      {
        checked
          ? (
            <div className={classes.container}>
              {
                legendItems.map(
                  (item, index) => (
                    <Grow
                      key={item.name}
                      in={checked}
                      {...(checked ? { timeout: 125 * index } : {})}
                    >
                      <Box className={classes.legendBlock} >
                        <StopIcon fontSize='large' style={{color: item.color}} />
                        <Typography style={{fontSize: "0.9em"}} >{item.name}</Typography>
                      </Box>
                    </Grow>
                  )
                )
              }
            </div>
          )
          : null
      }
    </div>
  );
};
