import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super()

    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.stashMessage(this.state);
    this.clearForm(event)
  }

  clearForm = (event) => {
    event.preventDefault();
    this.setState({ title: '', body: '' })
  }

  render() {
    return <div>
        <form>
          <input
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="body"
            value={ this.state.body }
            onChange={ this.handleChange }
          />
          <button onClick={ this.handleClick }>SUBMIT</button>
          <button onClick={ this.clearForm }>CLEAR</button>
        </form>
      </div>
  }
}

export default MessageForm