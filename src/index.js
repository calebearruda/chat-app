import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import './css/index.css'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
