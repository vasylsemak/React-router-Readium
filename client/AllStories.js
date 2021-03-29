import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Stories from './Stories'

const AllStories = () => {
  const [ stories, setStories ] = useState([])

  useEffect(() => {
    (async function() {
      try {
        const { data } = await axios.get('/api/stories')
        setStories(data)
      } catch (error) { console.error(error) }
    })()
  }, [])

  return <Stories stories={stories} />
}

export default AllStories
