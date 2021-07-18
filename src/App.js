import React from 'react'
import Container from '@material-ui/core/Container'
import {Header} from './components/Static'
import {HubForm} from './components/Forms'
import OrdersTable from "./components/Table"
import SnackbarInfo, {labelAlertsTypes} from "./components/SnackBar"
import {OrderStatesChoice} from "./choices/Orders"

class App extends React.Component {
  state = {
      hubData: [],
      graphHubData: null,
      labelText: null,
      labelVisible: false,
      labelAlertType: labelAlertsTypes.INFO
  }

  createHubGraphData = (hubData) => {
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
      this.raiseLabel("Нет данных!", 2000, labelAlertsTypes.WARNING)
    }
  }

  raiseLabel = (text, showTime=2000, labelType=labelAlertsTypes.INFO) => {
    this.setState({labelText: text, labelVisible: true, labelType: labelType})
    setTimeout(() => this.setState({labelVisible: false}), showTime)
  }

  render() {
      const visibleTable = this.state.hubData.length < 1
      return (
        <Container maxWidth="xl">
          <Header>Дашборд</Header>
          {/*<Box marginBottom={5} height={30}>*/}
          {/*    {this.state.labelVisible ? <MUIInfoLabel msg={this.state.labelText}/> : null}*/}
          {/*</Box>*/}

          <SnackbarInfo
                msg={this.state.labelText}
                labelVisible={this.state.labelVisible}
                labelType={this.state.labelType}
                makeInvisible={() => this.setState({labelVisible: false})}
          />
          <HubForm
              setAppHubData={this.setHubData}
              raiseLabel={this.raiseLabel}
              graphHubData={this.state.graphHubData}
          />
        {visibleTable ? null : <OrdersTable hubData={this.state.hubData}/>}
        </Container>
      )
  }
}

export default App
