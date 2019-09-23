import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

const Hello = ({world}) => {
  return (
    <div>Hello {world}</div>
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        <Route path={'/'} render={(props) => <Hello {...props} world={'world!!'}/>} />
      </Router>
    )
  }
}

export default App