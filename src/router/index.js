import React from 'react'

import {Route,Switch} from 'react-router-dom'

import App from '../App.js'
import data from '../pages/data/data'

export default () => (
  <Switch>
     <Route exact path="/" component={data}></Route>
  </Switch>
)