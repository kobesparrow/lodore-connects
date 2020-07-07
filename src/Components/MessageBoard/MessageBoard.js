import React, { Component } from 'react';
import MessageForm from '../MessageForm/MessageForm';

class MessageBoard extends Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  stashMessage = (message) => {
    const { title, body } = message
    let newMessage = { title, body, id: Date.now() }
    let messages = [...this.state.messages, newMessage]
    this.setState({ messages });
  }

  render() {
  return <div>
      <MessageForm stashMessage={ this.stashMessage } />
      <MessageDisplay messages={ this.state.messages } />
    </div>
  }
}

export default MessageBoard