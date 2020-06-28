import React, { Component } from 'react'

export default class NewsDetial extends Component {
  state = {
    detials: [
      {
        id: 1,
        title: 'new1',
        content: 'new1Content...'
      },
      {
        id: 2,
        title: 'new2',
        content: 'new2Content...'
      },
      {
        id: 3,
        title: 'new3',
        content: 'new3Content...'
      },
    ]
  }
  render() {
    const { detials } = this.state
    const pathName = this.props.location.pathname
    const index = pathName.lastIndexOf('/')
    const num = pathName.slice(index + 1)
    let newDetial= detials.find(item => item.id === num*1)
    return (
      <div>
        <h2>NewsDetial:{this.props.match.params.id}</h2>
        <div>
          <h3>{newDetial.title}</h3>
          <h3>{newDetial.content}</h3>
        </div>
      </div>
    )
  }
}
