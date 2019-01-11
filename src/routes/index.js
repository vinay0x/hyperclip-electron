import React from 'react'
import { Switch, Route } from 'react-router'
import ClipWindow from '../components/ClipWindow'
import Settings from '../components/Settings'

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={ClipWindow} />
    <Route path="/settings" component={Settings} />
  </Switch>
)

export default Routes
