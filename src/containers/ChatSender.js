import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessageAction } from '../actions/chatActions'

class ChatSender extends Component {
  state = {
    messageInput: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendMessage({ message: this.state.messageInput, user_id: this.props.user_id })
    this.setState({ messageInput: '' })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          name="messageInput"
          value={this.state.messageInput}
          onChange={event => this.handleChange(event)}
        />
        <input type="submit" value="Send" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: message => dispatch(sendMessageAction(message))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ChatSender)
