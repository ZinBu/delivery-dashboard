import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './Buttons'


const Options = (props) => {
    const hubs = [
      <option key='-1' value={null}></option>,
      ...props.hubs.map((hub, index) => <option key={index} value={hub.id}>{hub.name} (id={hub.id})</option>)
    ]
    return <select id="hubs" onChange={props.handleChange} >{hubs}</select>
}


export class HubForm extends Component {
  state = {
    hubs: [],
    selectedHubId: null,
    buttonDisabled: false
  }

  componentDidMount() {
    const url = 'http://127.0.0.1:8000/Tms/v1/System/hub/'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      }).catch(error => console.log(error))
      // Тут запрос
      this.setState({
        hubs: [
          {id: 1, name: 'ТК1'},
          {id: 3, name: 'ТК22'},
      ]
      })
  }

  handleFormChange = (event) => {
    this.setState({
      selectedHubId: event.target.value,
    })
  }

  requestHubInfo = () => {
    const url = `http://127.0.0.1:8000/dashboard_api/${this.state.selectedHubId}/`
    this.setState({buttonDisabled: true})
    fetch(url)
      .then(result => result.json())
      .then(result => this.props.setAppHubs(result))
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
        <Button text='Кнопка' onClick={this.requestHubInfo} isDisabled={this.state.buttonDisabled} />
      </div>
    );
  }
}


Options.propTypes = {
    handleChange: PropTypes.func.isRequired,
    hubs: PropTypes.array,
};

