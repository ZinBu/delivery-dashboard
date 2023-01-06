import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 150,
    maxHeight: 200
  },
  title: {
    fontSize: 20,
  },
  body: {
    marginTop: 1,
  }
})

export const HubInfoCard = (props) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                {/*display='flex'*/}
                <Box>
                    <Typography className={classes.title} variant="h6" gutterBottom>
                        {props.hub.name}
                    </Typography>
                    <Box marginBottom={4}>
                        <Typography  color="textSecondary" gutterBottom>
                            ID={props.hub.id}
                        </Typography>
                    </Box>
                </Box>
                <Typography className={classes.body} gutterBottom>
                    Working hours: {props.hub.windowOpen} - {props.hub.windowClose}
                </Typography>
                <Typography className={classes.body} gutterBottom>
                    Timezone: {props.hub.localTimezone}
                </Typography>
            </CardContent>
        </Card>
    )
}