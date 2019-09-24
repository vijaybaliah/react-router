import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

const Home = () => {
  return <h3>
    Home
  </h3>
}

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/will-match">Will Match</Link></li>
          <li><Link to="/will-not-match">Will Not Match</Link></li>
          <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
        </ul>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/will-match' component={WillMatch} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App