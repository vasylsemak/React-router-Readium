import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Authors = () => {
  const [ authors, setAuthors ] = useState([])

  useEffect(() => {
    (async function() {
      try {
        const { data } = await axios.get('/api/authors')
        setAuthors(data)
      } catch (error) { console.error(error) }
    })()
  }, [])

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

export default Authors
