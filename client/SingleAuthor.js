import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Stories from './Stories'

class SingleAuthor extends Component {
  constructor() {
    super()
    this.state = { author: {}}
  }

  async componentDidMount() {
    try {
      const authorId = this.props.match.params.id

      const responces = await Promise.all([
        axios.get(`/api/authors/${authorId}`),
        axios.get(`/api/authors/${authorId}/stories`),
        axios.get(`/api/authors/${authorId}/comments`)
      ])

      const [ author, aStories, aComments ] = responces.map(r => r.data)
      author.stories = aStories
      author.comments = aComments

      this.setState({ author: author })
    } catch(err) { console.error(err) }
  }

  render() {
    const { author } = this.state
    const { stories } = author

    return (
      <div id='single-author' className='column'>
        <div id='single-author-detail' className='row'>
          <div className='column mr1'>
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <div id='single-author-nav'>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route path='/authors/:id/stories' render={() => <Stories stories={stories} />} />
        </div>
      </div>
    )
  }
}

export default SingleAuthor
