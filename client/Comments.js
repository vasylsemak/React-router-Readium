import React from 'react'
import { Link } from 'react-router-dom'

const Comments = ({ comments }) => (
  <div id='comments'>
    {
      comments.map(c => (
        <div className='comment row' key={c.id}>
          <Link to={`/authors/${c.author.id}`}>
            <img src={c.author.imageUrl} />
          </Link>
          <div className='column'>
          <h5>{c.author.name}</h5>
          <div>{c.content}</div>
          </div>
        </div>
      ))
    }
  </div>
)

export default Comments
