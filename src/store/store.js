import { createStore } from 'redux'
import rootReducer from '../reducers/root'
import { messages, users } from './preLoadedData'

const store = createStore(
  rootReducer,
  { messages, users },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
