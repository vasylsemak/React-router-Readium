import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import AllStories from './AllStories'
import Authors from './Authors'
import SingleStory from './SingleStory'
import SingleAuthor from './SingleAuthor'
import Stories from "./Stories"

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

          <Route path='/authors/:id' component={SingleAuthor} />
          <Route path='/stories/:id' component={SingleStory} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/stories' component={Stories} />
          <Route exact path='/' component={AllStories} />

        </div>
      </Router>
    )
  }
}
