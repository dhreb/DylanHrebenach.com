import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, Signup, Home} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* Displays our Login component as a fallback */}
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
