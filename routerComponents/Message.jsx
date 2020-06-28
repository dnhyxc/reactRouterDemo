import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import MessageDetial from '../routerComponents/MessageDetial'

export default class Message extends Component {
  pushHandler = (num) => {
    if (num === 1) {
      this.props.history.push('/home/message/messageDetial/1')
    } else if (num === 2) {
      this.props.history.push('/home/message/messageDetial/2')
    } else {
      this.props.history.push('/home/message/messageDetial/3')
    }
  }
  replaceHandler = (num) => {
    if (num === 1) {
      this.props.history.replace('/home/message/messageDetial/1')
    } else if (num === 2) {
      this.props.history.replace('/home/message/messageDetial/2')
    } else {
      this.props.history.replace('/home/message/messageDetial/3')
    }
  }
  goBack = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home/message/messageDetial/1">message1</NavLink>&nbsp;
            <button onClick={this.pushHandler.bind(this, 1)}>pushHandler</button>&nbsp;
            <button onClick={this.replaceHandler.bind(this, 1)}>replaceHandler</button>
          </li>
          <li>
            <NavLink to="/home/message/messageDetial/2">message2</NavLink>&nbsp;
            <button onClick={this.pushHandler.bind(this, 2)}>pushHandler</button>&nbsp;
            <button onClick={this.replaceHandler.bind(this, 2)}>replaceHandler</button>
          </li>
          <li>
            <NavLink to="/home/message/messageDetial/3">message3</NavLink>&nbsp;
            <button onClick={this.pushHandler.bind(this, 3)}>pushHandler</button>&nbsp;
            <button onClick={this.replaceHandler.bind(this, 3)}>replaceHandler</button>
          </li>
          <br/>
          <button onClick={this.goBack}>GoBack</button>
        </ul>
        
        <div>
          <Route path="/home/message/messageDetial/:id" component={MessageDetial}></Route>
        </div>
      </div >
    )
  }
}
