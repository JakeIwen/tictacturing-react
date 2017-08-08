import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/template.jsx'
import Home from '../containers/home.jsx'
import Profile from '../containers/profile.jsx'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      >
        <IndexRoute
          component={Home}
          />

        <Route
          path={'/profile'}
          component={Profile}
          />
      </Route>

  )
}

const Routes = createRoutes()

export default Routes
