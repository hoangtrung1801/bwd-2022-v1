import { createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import server from './server.js'

server();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename='/'>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
