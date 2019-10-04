import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

class Form extends React.Component {
  state = {
    isBlocking: false
  }
  render() {
    const { isBlocking } = this.state
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        event.target.reset()
        this.setState(() => ({
          isBlocking: false
        }))
      }}>
        <Prompt
          when={isBlocking}
          message={(location) => `Are you sure you want to go to ${location.pathname}`}
        />
        <input type='text' onChange={(e) => {
          const isBlocking = e.target.value.length > 0
          this.setState({ isBlocking })
        }} />
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Form</Link></li>
            <li><Link to='/one'>One</Link></li>
            <li><Link to='/two'>Two</Link></li>
          </ul>
        </div>
        <Route path='/' exact component={Form} />
        <Route path="/one" render={() => <h3>One</h3>}/>
        <Route path="/two" render={() => <h3>Two</h3>}/>
      </Router>
    )
  }
}

export default App