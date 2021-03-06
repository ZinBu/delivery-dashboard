import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress'
import {HubSelect} from './HubSelect'
import {labelAlertsTypes} from "./SnackBar"
import {HubInfoCard} from "./HubInfoCard"
import {HubOrderProportionGraphCard} from "./Graphics"
import { hubRes, hubList } from '../DataSet';


export class HubForm extends React.Component {
  state = {
    hubs: [],
    selectedHubId: null,
    selectedHubData: null,
    buttonDisabled: true,
    buttonClickCount: 0
  }

  componentDidMount() {
    const url = '/api/hub/s'
    // Mock reqeust
    fetch(url)
      // .then((result) => {
      //   if (!result.ok) {
      //     this.props.raiseLabel("Нужна авторизация", 2000, labelAlertsTypes.ERROR)
      //     throw new Error()
      //   }
      //   return result.json()
      // })
      .then((result) => {
        this.setState({hubs: hubList.hubs})
      }).catch(error => error)
  }

  handleFormChange = hub => {
    this.setState({
      selectedHubId: hub.id,
      selectedHubData: hub,
      buttonDisabled: !hub.id
    })
  }

  updateButtonClicks = () => {
    // Check clicks count in a row for a 3 second interval
    if (this.state.buttonClickCount === 0) {
      setTimeout(() => this.setState({buttonClickCount: 0}), 3000)
    }
    this.setState({buttonClickCount: this.state.buttonClickCount + 1})
    return this.state.buttonClickCount
  }

  requestHubInfo = () => {
    const clickCount = this.updateButtonClicks()
    if (clickCount >= 2) {
      // It means the third click
      this.props.raiseLabel("Прими таблетки!", 4000, labelAlertsTypes.INFO)
      this.setState({buttonDisabled: true})
      setTimeout(() => this.setState({buttonDisabled: false}), 4000)
      return 
    }

    if (!this.state.selectedHubId) {
      return
    }

    this.setState({buttonDisabled: true})

    const url = `api/dashboard/${this.state.selectedHubId}/`
    // Mock query
    fetch(url)
      // .then(result => result.json())
      // .then(result => this.props.setAppHubData(result))
      .then(result => this.props.setAppHubData(this.state.selectedHubId === 1 ? hubRes : []))
      .catch(error => console.log(error))
      .finally(() => this.setState({buttonDisabled: false}))
  }

  render() {
    const { hubs } = this.state;
    return (
      <React.Fragment>
        <Box display='flex' marginBottom={5} minHeight={200} maxHeight={200}>
          {/* Block with the select, button and loader */}
          <Box>
            <Box marginBottom={1} marginTop={1}>
              <HubSelect hubs={hubs} handleChange={this.handleFormChange} />
            </Box>
            <Box marginBottom={1} marginTop={1} display='flex'>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={this.requestHubInfo}
                  disabled={this.state.buttonDisabled}
              >
                Запросить
              </Button>
              {(this.state.selectedHubId && this.state.buttonDisabled) ? <Progress/> : null}
            </Box>
          </Box>
          {/* Block with the cards */}
          <Box marginLeft={10} minHeight={170} display='flex'>
            {this.state.selectedHubData ? <HubInfoCard hub={this.state.selectedHubData} /> :  null}
            <Box marginLeft={5} >
              {this.props.graphHubData ? <HubOrderProportionGraphCard graphHubData={this.props.graphHubData} /> :  null}
            </Box>
          </Box>
      </Box>
      </React.Fragment>
    )
  }
}

const Progress = () => (
    <Box marginLeft={5} paddingTop={0.5}>
      <CircularProgress size={25} disableShrink/>
    </Box>
)