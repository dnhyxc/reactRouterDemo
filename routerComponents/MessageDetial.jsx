import React, { Component } from 'react'

export default class MessageDetial extends Component {

  state = {
    messageDetial: []
  }

  componentDidMount() {
    const messages = [
      {
        id: 1,
        title: 'msg1',
        content: 'message1...'
      },
      {
        id: 2,
        title: 'msg2',
        content: 'message2...'
      },
      {
        id: 3,
        title: 'msg3',
        content: 'message3...'
      }
    ]
    setTimeout(() => {
      // 用于判断组件是否存在，如果存在就更新数据的状态，否则直接return
      if (!this.updater.isMounted(this)) return
      this.setState({
        messageDetial: messages
      })
    }, 2000)
  }

  render() {
    const { messageDetial } = this.state
    const path = this.props.location.pathname
    const index = path.lastIndexOf('/')
    let num = path.substring(index + 1) * 1
    let filterMessage = {}
    if (messageDetial) {
      filterMessage = messageDetial.find(item => item.id === num)
    }
    return (
      <div>
        MessageDetial:{this.props.match.params.id}
        <div>
          {
            <div>
              {filterMessage ? (
                <div>
                  <h3>{filterMessage.title}</h3>
                  <h3>{filterMessage.content}</h3>
                </div>
              ) : 'Loading...'}
            </div>
          }
        </div>
      </div>
    )
  }
}
