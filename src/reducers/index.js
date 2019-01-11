import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import count from './count'

export default (history) => combineReducers({
  router: connectRouter(history),
  count
})
