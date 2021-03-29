import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comments from './Comments'

const SingleStory = props => {
  const [ story, setStory ] = useState({})
  const content = story.content || ''
  const comments = story.comments || []

  useEffect(() => {
    (async function() {
      try {
        const id = props.match.params.id
        const { data } = await axios.get(`/api/stories/${id}`)
        setStory(data)
      } catch (error) { console.error(error) }
    })()
  }, [])

  return (
    <div id='single-story' className='column'>
      <h1>{story.title}</h1>
      {
        content
          .split('\n')
          .map((line, idx) => <p key={idx}>{line}</p>)
      }
      <h3>Responses:</h3>
      <Comments comments={comments} />
    </div>
  )
}

export default SingleStory
