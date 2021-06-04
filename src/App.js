import React, {Component} from 'react'
import Table from './Table'
import {Header} from './components/Static'
import {HubForm} from './components/Forms'


class App extends Component {
  state = {
      hubs: [],
  }

  setHubs = (hubs) => this.setState({hubs: hubs})

  render() {
      return (
        <div className="container">
          <Header text="Дашборд" />
          <HubForm setAppHubs={this.setHubs} />
          <Table />
        </div>
      )
  }
}

export default App
