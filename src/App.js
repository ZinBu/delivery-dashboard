import React, {Component} from 'react'
import Table from './Table'
import {Header} from './components/Static'
import {HubForm} from './components/Forms'


const InfoLabel = (props) => <p style={{"color": "blue"}}>{props.text}</p>


class App extends Component {
  state = {
      hubData: [],
      labelText: null
  }

  setHubData = (hubData) => {
    this.setState({hubData: hubData})
    if (!hubData || hubData.length < 1) {
      this.setState({labelText: "Нет данных!"})
    } else {
      this.setState({labelText: null})
    }
  }

  render() {
      return (
        <div className="container">
          <Header text="Дашборд" />
          <InfoLabel text={this.state.labelText}/>
          <HubForm setAppHubData={this.setHubData} />
          <Table hubData={this.state.hubData} />
        </div>
      )
  }
}

export default App
