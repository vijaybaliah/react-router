import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const users = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const find = (id) => users.find(user => user.id === id)

const Person = ({ match }) => {
  const person = find(parseInt(match.params.id, 10))
  return (
    <div>
      <h3>{person.name + '\'s'} friends</h3>
      <ul>
        {
          person.friends.map((id) => (
            <li key={`${match.url}/${id}`}><Link to={`${match.url}/${id}`}>{find(id).name}</Link></li>
          ))
        }
      </ul>
      <Route path={`${match.url}/:id`} component={Person}/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Person match={{params: { id: 0 }, url: ''}} />
      </Router>
    )
  }
}

export default App