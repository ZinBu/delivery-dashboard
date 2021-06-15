import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './Buttons'
import {authHeaderValue} from '../Settings' 
import {hubRes, hubList} from '../Dataset'


const Options = (props) => {
    const hubs = [
      <option key='-1' value="">-------</option>,
      ...props.hubs.map((hub, index) => <option key={index} value={hub.id}>{hub.name} (id={hub.id})</option>)
    ]
    return <select id="hubs" onChange={props.handleChange} >{hubs}</select>
}


export class HubForm extends Component {
  state = {
    hubs: [],
    selectedHubId: null,
    buttonDisabled: true,
    buttonClickCount: 0
  }

  componentDidMount() {
    const url = 'http://127.0.0.1:8000/Tms/v1/System/hub/'

    const fetchParams = {
      headers: {
        Authorization: authHeaderValue
      }
    }
    fetch(url, fetchParams)
      .then((result) => hubList)
      .then((result) => {
        this.setState({
          hubs: result.hubs.map(
              hub => {
                return {id: hub.id, name: hub.name}
              }
          ),
        })
      }).catch(error => console.log(error))
  }

  handleFormChange = event => {
    const value = event.target.value
    this.setState({
      selectedHubId: value,
      buttonDisabled: !value ? true : false
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
      this.props.raiseLabel("Прими таблетки!", 4000)
      this.setState({buttonDisabled: true})
      setTimeout(() => this.setState({buttonDisabled: false}), 4000)
      return 
    }

    if (!this.state.selectedHubId) {
      return
    }

    const url = `http://127.0.0.1:8000/Dashboard/table/${this.state.selectedHubId}/`
    this.setState({buttonDisabled: true})
    
    const fetchParams = {
      headers: {
        Authorization: authHeaderValue
      }
    }
    fetch(url, fetchParams)
      .then(result => this.state.selectedHubId === 1 ? hubRes : result.json())
      .then(result => this.props.setAppHubData(result))
      .catch(error => console.log(error))
      .finally(() => this.setState({buttonDisabled: false}))
  }

  render() {
    const { hubs } = this.state;
  
    return (
      <div>
        <form>
          <label htmlFor="hubs">Выбор ТК:</label>
          <Options hubs={hubs} handleChange={this.handleFormChange} />
        </form>
        <Button text='Запросить' onClick={this.requestHubInfo} isDisabled={this.state.buttonDisabled} />
      </div>
    );
  }
}


Options.propTypes = {
    handleChange: PropTypes.func.isRequired,
    hubs: PropTypes.array,
};

