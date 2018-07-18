import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import ChatList from './ChatList'
import ChatSender from './ChatSender'
import { USER, WORKER } from '../constants/typesUser'
import _ from 'lodash'

class ChatRoom extends Component {
  render() {
    return (
      <div>
        <Header totalMessages={this.props.totalMessages} costumer={this.props.costumer} />
        <ChatList />
        <ChatSender user_id={this.props.userLogged.user_id} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalMessages: state.messages.length,
    costumer: _.find(state.users, u => u.type === USER),
    userLogged: _.find(state.users, u => u.type === WORKER)
  }
}

export default connect(mapStateToProps)(ChatRoom)
