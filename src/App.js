import React, {Component} from 'react'
import Table from './Table'
import {Header} from './components/Static'
import {HubForm} from './components/Forms'


const InfoLabel = (props) => {
  const visibility = {"visibility": props.visible ? "visible" : "hidden"}
  const cls = `info-label ${props.visible ? "fadeIn" : "fadeOut"}`
  return <div className={cls} style={visibility}><p className="info-label-p">{props.text}</p></div>
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
      this.raiseLabel("Нет данных!")
    }
  }

  raiseLabel = (text, showTime = 2000) => {
    this.setState({labelText: text, labelVisible: true})
    setTimeout(() => this.setState({labelText: null, labelVisible: false}), showTime)
  }

  render() {
      return (
        <div className="container">
          <Header text="Дашборд" />
          <InfoLabel visible={this.state.labelVisible}  text={this.state.labelText}/>
          <HubForm setAppHubData={this.setHubData} raiseLabel={this.raiseLabel}/>
          <Table hubData={this.state.hubData} />
        </div>
      )
  }
}

export default App
