import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NoMatch from './pages/NoMatch'
class App extends React.Component {
  render() {
    return (
      <Router>
        {/* 路由规则 */}
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/city" component={City} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
