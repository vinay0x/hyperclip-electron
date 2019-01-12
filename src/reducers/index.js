import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import clipboard from './clipboard'
import settings from './settings'

export default (history) => combineReducers({
  router: connectRouter(history),
  clipboard,
  settings
})
