import React from 'react'
import { Switch, Route } from 'react-router'
import App from '../components/App'
import Settings from '../components/Settings'

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/settings" component={Settings} />
  </Switch>
)

export default Routes
