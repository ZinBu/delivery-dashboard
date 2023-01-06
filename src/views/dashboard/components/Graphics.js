import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { PieChart, Pie, Cell } from "recharts"
import { OrderStatesChoice } from "../../../choices/Orders";

const COLORS = {
    [OrderStatesChoice.WIP]: "#1976d2c2",
    [OrderStatesChoice.FINISHED]: "#4caf50b8",
    [OrderStatesChoice.CANCELED]: "#d32f2fad"
}

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    maxHeight: 200,
  }
})

const createColorCells = (graphData) => (
    graphData.map(
        (entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[entry.state]} />)
    )
)

export const HubOrderProportionGraphCard = (props) => {
    const classes = useStyles()

    return (
      <Card className={classes.card}>
          <CardContent>
            <PieChart width={300} height={300}>
                {/*<text x={125} y={85} dy={8} textAnchor="middle" fill={"#8884d8"}>*/}
                {/*Some text*/}
                {/*</text>*/}
              <Pie
                data={props.graphHubData}
                cx={125}
                cy={85}
                innerRadius={40}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {createColorCells(props.graphHubData)}
              </Pie>
            </PieChart>
          </CardContent>
      </Card>
  )
}
