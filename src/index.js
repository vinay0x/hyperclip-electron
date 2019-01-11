import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import Main from './components/Main'
import { store, persistor, history } from './store'

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </PersistGate>
  </Provider>, document.getElementById('app'))
