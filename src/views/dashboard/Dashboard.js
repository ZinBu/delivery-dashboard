import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import OrdersTable from "./components/Table"
import { HubInfoCard } from "./components/HubInfoCard"
import { HubOrderProportionGraphCard } from "./components/Graphics"
import { HubForm } from '../../components/Forms'
import { labelAlertsTypes } from "../../components/SnackBar"
import { OrderStatesChoice } from "../../choices/Orders";
import { getDashboardData } from "../../tools/api";
import {messages} from "../../choices/Extra";

class Dashboard extends React.Component {
  state = {
      hubData: [],
      graphHubData: null,
      selectedHubData: null,
  }

  createHubGraphData = (hubData) => {
    if (!hubData || hubData.length === 0) {
        return
    }
    let wip = 0
    let finished = 0
    let cancelled = 0
    for (let i = 0; i < hubData.length; i++) {
        switch (hubData[i].state) {
            case OrderStatesChoice.WIP:
                wip++
                break
            case OrderStatesChoice.FINISHED:
                finished++
                break
            case OrderStatesChoice.CANCELED:
                cancelled++
                break
            default:
                console.warn('Unexpected status')
        }
    }
    return [
      { state: OrderStatesChoice.WIP, value: wip },
      { state: OrderStatesChoice.FINISHED, value: finished },
      { state: OrderStatesChoice.CANCELED, value: cancelled },
  ]
  }

  setHubData = (hubData) => {
    this.setState({
        hubData: hubData,
        graphHubData: this.createHubGraphData(hubData)
    })
    if (!hubData || hubData.length < 1) {
      this.props.raiseLabel(messages.noData, 2000, labelAlertsTypes.WARNING)
    }
  }

  requestDashboardData = (finallyAction) => {
    getDashboardData(this.state.selectedHubData.id)
      .then(result => result.data)
      .then(result => this.setHubData(result))
      .catch(error => {
        console.log(error);
        this.props.raiseLabel(messages.error, 2000, labelAlertsTypes.ERROR)
      })
      // todo To know how to use finally chain in a children with its state properly
      .finally(finallyAction)
  };

  render() {
      const visibleTable = this.state.hubData.length < 1
      return (
        <Container maxWidth="xl">
          <Box display='flex' marginBottom={5} minHeight={200} maxHeight={200}>
            {/* Block with the select, button and loader */}
            <HubForm
                raiseLabel={this.props.raiseLabel}
                setHubSelect={(selectedHub) => this.setState({selectedHubData: selectedHub})}
                queryOnClick={this.requestDashboardData}
            />
            {/* Block with the cards */}
            <Box marginLeft={10} minHeight={170} display='flex'>
              {this.state.selectedHubData ? <HubInfoCard hub={this.state.selectedHubData} /> :  null}
              <Box marginLeft={5} >
                {this.state.graphHubData ? <HubOrderProportionGraphCard graphHubData={this.state.graphHubData} /> :  null}
              </Box>
            </Box>
          </Box>
        {visibleTable ? null : <OrdersTable hubData={this.state.hubData}/>}
        </Container>
      )
  }
}

export default Dashboard
