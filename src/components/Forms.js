import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress'
import {HubSelect} from './HubSelect'
import {labelAlertsTypes} from "./SnackBar"
import {requestHubs} from "../tools/Hub";
import {messages} from "../choices/Extra";


export class HubForm extends React.Component {
  state = {
    hubs: [],
    selectedHubId: null,
    buttonDisabled: true,
    buttonClickCount: 0
  }

  componentDidMount() {
    requestHubs((result) => this.setState({hubs: result.hubs}));
  }

  componentWillUnmount() {
    clearTimeout(this.buttonClickTimeoutOne);
    clearTimeout(this.buttonClickTimeoutTwo);
    clearInterval(this.intervalQuery);
  }

  handleFormChange = hub => {
    // Set selected hub data to a parent
    this.props.setHubSelect(hub)
    this.setState({
      selectedHubId: hub.id,
      buttonDisabled: !hub.id
    })
  }

  updateButtonClicks = () => {
    // Check clicks count in a row for a 3 second interval
    if (this.state.buttonClickCount === 0) {
      this.buttonClickTimeoutOne = setTimeout(() => this.setState({buttonClickCount: 0}), 3000)
    }
    this.setState({buttonClickCount: this.state.buttonClickCount + 1})
    return this.state.buttonClickCount
  }

  requestHubInfo = () => {
    const clickCount = this.updateButtonClicks()
    if (clickCount >= 2) {
      // It means the third click
      this.props.raiseLabel(messages.indignation, 4000, labelAlertsTypes.INFO)
      this.setState({buttonDisabled: true})
      this.buttonClickTimeoutTwo = setTimeout(() => this.setState({buttonDisabled: false}), 4000)
      return 
    }

    if (!this.state.selectedHubId) {
      return
    }

    this.setState({buttonDisabled: true})
    this.props.queryOnClick(() => this.setState({buttonDisabled: false}))
    // Create interval event for this query function start. 
    // But only in a case if it doesn't exist yet. 
    if (this.props.requestPeriod && !this.intervalQuery) {
      this.intervalQuery = setInterval(this.requestHubInfo, this.props.requestPeriod);
    }
  }

  render() {
    const { hubs } = this.state;
    return (
      <React.Fragment>
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
                Request
              </Button>
              {(this.state.selectedHubId && this.state.buttonDisabled) ? <Progress/> : null}
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