import React, { Component } from 'react'

export default class About extends Component {

  state = {
    inpValue: "",
    messages: [
      {
        id: 1,
        title: 'message1',
        content: 'messageContent1...'
      },
      {
        id: 2,
        title: 'message2',
        content: 'messageContent2...'
      },
      {
        id: 3,
        title: 'message3',
        content: 'messageContent3...'
      },
      {
        id: 4,
        title: 'message3',
        content: 'messageContent4...'
      },
      {
        id: 5,
        title: 'message3',
        content: 'messageContent5...'
      }
    ]
  }

  inpRef = React.createRef()

  inpValueChange = (e) => {
    this.setState({
      inpValue: e.target.value
    })
  }

  render() {
    const { inpValue, messages } = this.state
    let result = messages.find(item => item.id === inpValue * 1)
    return (
      <div>
        <h1>About</h1>
        <input type="number" placeholder="请输入1-5之间的数字" ref={this.inpRef} value={inpValue} onChange={this.inpValueChange} />
        {inpValue ? (
          result ? (
            <div>
              <h2>{result.title}</h2>
              <h2>{result.content}</h2>
            </div>
          ) : <h3>您查询的内容飞走了~~~</h3>
        ) : ''}
      </div>
    )
  }
}
