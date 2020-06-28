import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import News from '../routerComponents/News'
import Message from '../routerComponents/Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <NavLink to="/home/news">news</NavLink>&nbsp;
          <NavLink to="/home/message">message</NavLink>
        </div>
        <Route path='/home/news' component={News}></Route>
        <Route path='/home/message' component={Message}></Route>
        <Redirect to="/home/news"></Redirect>
      </div>
    )
  }
}
