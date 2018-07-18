import { combineReducers } from 'redux'
import messageReducer from './messageReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  messages: messageReducer,
  users: userReducer
})

export default rootReducer
