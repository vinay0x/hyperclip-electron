import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ElectronStore from 'electron-store'
import createElectronStorage from 'redux-persist-electron-storage'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

// Connected-React-Router
const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

// Redux-Persist
const electronStore = new ElectronStore()
const persistConfig = {
  key: 'root',
  storage: createElectronStorage({
    electronStore
  })
}
// Enhance reducers with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)

// Enhance the store with persistory
const persistor = persistStore(store)

export {
  store,
  persistor,
  history
}
