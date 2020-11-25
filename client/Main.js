import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Stories from './Stories'
import Authors from './Authors'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/stories' component={Stories} />
          <Route exact path='/' component={Stories} />
        </div>
      </Router>
    )
  }
}
