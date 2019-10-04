import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 300);
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 300);
  }
}

const Public = () => <h3>public</h3>

const Protected = () => <h3>protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true })
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const {redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return (<Redirect to={from} />)
    }
    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(() => (
  fakeAuth.isAuthenticated === true
  ? (<p>
    welcome ! <button onclick={() => {
      fakeAuth.signout(() => history.push('/'))
    }}>
      signout
    </button>
  </p>)
  : (
    <p>You are not logged in.</p>
  )
))

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to='/public'>public</Link></li>
            <li><Link to='/protected'>protected</Link></li>
          </ul>
        </div>
        <Route path={'/public'} component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path={'/protected'} component={Protected} />
      </Router>
    )
  }
}

export default App