import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import queryString from 'query-string'

const queryParam = ({location}) => {
  return (
    <div>
      {queryString.parse(location)}
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        <Route path={'/'} component={queryParam} />
      </Router>
    )
  }
}

export default App