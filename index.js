import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom'

import {
  KeepAlive
} from 'react-keep-alive';

import Home from './routerComponents/Home'
import About from './routerComponents/About'

export default class index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavLink to='/home'>Home</NavLink>&nbsp;
            <NavLink to='/about'>About</NavLink>
          </div>
          <div>
            <Switch>
              <Route path='/home'>
                <KeepAlive name="Home">
                  <Home />
                </KeepAlive>
              </Route>
              <Route path='/about'>
                <KeepAlive name="About">
                  <About />
                </KeepAlive>
              </Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
