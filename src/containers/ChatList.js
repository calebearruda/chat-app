import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'

class ChatList extends Component {
  render() {
    const { messages } = this.props
    return <ul>{messages.map((m, index) => <Message message={m.message} key={index} />)}</ul>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(ChatList)
