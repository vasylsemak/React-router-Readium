import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Stories from './Stories'
import Authors from './Authors'
import SS from './SS'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <Link to='/'>
                <h1>Readium</h1>
              </Link>
            </div>
            <Navbar />
          </div>
          <Route path='/authors' component={Authors} />
          <Route path='/stories/:id' component={SS} />
          <Route exact path='/stories' component={Stories} />
          <Route exact path='/' component={Stories} />
        </div>
      </Router>
    )
  }
}
