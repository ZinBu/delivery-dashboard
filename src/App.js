import React, {Component} from 'react'
import Table from './Table'
import {Header} from './components/Static'
import {HubForm} from './components/Forms'


const InfoLabel = (props) => {
  const visibility = {"visibility": props.visible ? "visible" : "hidden"}
  return <div id="info-label" className="info-label fadeIn" style={visibility}><p className="info-label-p">{props.text}</p></div>
}


class App extends Component {
  state = {
      hubData: [],
      labelText: null,
      labelVisible: false,
  }

  setHubData = (hubData) => {
    this.setState({hubData: hubData})
    if (!hubData || hubData.length < 1) {
      this.setState({labelText: "Нет данных!", labelVisible: true})
      setTimeout(() => this.setState({labelText: null, labelVisible: false}), 2000)
    }
  }

  render() {
      return (
        <div className="container">
          <Header text="Дашборд" />
          <InfoLabel visible={this.state.labelVisible}  text={this.state.labelText}/>
          <HubForm setAppHubData={this.setHubData} />
          <Table hubData={this.state.hubData} />
        </div>
      )
  }
}

export default App
