import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const OldSchoolMenuLink = ({children, exact, to}) => (
  <Route exact={exact} path={to} children={({match}) => (
    <div>
      {match ? '>': ''}
      <Link to={to}>
        {children}
      </Link>
    </div>
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <OldSchoolMenuLink exact={true} to={'/'}>
          Home
        </OldSchoolMenuLink>
        <OldSchoolMenuLink to={'/about'}>
          About
        </OldSchoolMenuLink>
        <Route exact path={'/'} component={Home} />
        <Route path="/about" component={About}/>
      </Router>
    )
  }
}

export default App