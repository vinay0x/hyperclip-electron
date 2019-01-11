import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import clipboard from './clipboard'

export default (history) => combineReducers({
  router: connectRouter(history),
  clipboard
})
