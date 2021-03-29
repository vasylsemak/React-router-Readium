import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Authors extends Component {
  constructor() {
    super()
    this.state = { authors: [] }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/authors')
      this.setState({ authors: data })
    } catch (error) { console.log(error) }
  }

  render() {
    const { authors } = this.state
    return (
      <div>
        {
          authors.map(a => (
            <Link to={`/authors/${a.id}`} key={a.id}>
              <div className='author row'>
                <img src={a.imageUrl} />
                <p>{a.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}
