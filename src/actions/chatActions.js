import { SEND_MESSAGE, FETCH_MESSAGES } from '../constants/actionsConstants'

export const sendMessageAction = message => ({
  type: SEND_MESSAGE,
  message
})

export const fetchMessagesAction = () => ({
  type: FETCH_MESSAGES
})
