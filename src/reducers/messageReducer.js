import { SEND_MESSAGE, FETCH_MESSAGES } from '../constants/actionsConstants'

const messageReducer = (messages = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...messages, action.message]
    case FETCH_MESSAGES:
      return messages
    default:
      return messages
  }
}

export default messageReducer
