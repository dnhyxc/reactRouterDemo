import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import NewsDetial from '../routerComponents/NewsDetial'

export default class News extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><NavLink to="/home/news/detial/1">new1</NavLink></li>
            <li><NavLink to="/home/news/detial/2">new2</NavLink></li>
            <li><NavLink to="/home/news/detial/3">new3</NavLink></li>
          </ul>
        </div>
        <div>
          <Route path="/home/news/detial/:id" component={NewsDetial}></Route>
        </div>
      </div>
    )
  }
}
