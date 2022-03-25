import React from 'react'
import Auth from '../views/Auth'
import Task from '../views/Task'
import { Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path='/' component={Auth} />
      <PrivateRoutes exact path='/task' component={Task} />
    </React.Fragment>
  )
}

export default Routes
