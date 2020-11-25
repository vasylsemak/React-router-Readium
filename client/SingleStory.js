import React, { Component } from 'react'
import axios from 'axios'

const fakeStory = {
  title: 'Ships',
  id: 2,
  content: "A ship in port is safe,\nbut that's not what ships are built for",
  author: {
    id: 1,
    name: 'Grace Hopper'
  },
  comments: [
    {
      id: 4,
      content: 'I like ships!',
      author: {
        id: 2,
        name: 'Alan Turing',
        imageUrl: 'default-author.png'
      }
    }
  ]
}

export default class SingleStory extends Component {
  constructor() {
    super()
    this.state = { story: fakeStory }

  // async componentDidMount() {
  //   try {
  //     const { data } = await axios.get
  //   } catch (error) {
  //     console.log('Error from SingleStory axios request: ', error)
  //   }

  }

  render() {
    const { story } = this.state

    return (
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {story.content.split('\n').map((newLine, idx) => (
          <p key={idx}>{newLine}</p>
        ))}

        <h3>Responses:</h3>
        <div id='comments'>
          {story.comments.map((c, idx) => (
            <div key={idx} className='comment row'>
              <img src={c.author.imageUrl} />
              <div className='column'>
                <a>
                  <h5>{c.author.name}</h5>
                </a>
                <div>{c.content}</div>
              </div>
            </div>
          ))}



          {/* <div className='comment row'>
            <img src='COMMENT_2_AUTHOR_IMAGE_URL' />
            <div className='column'>
              <a>
                <h5>COMMENT_2_AUTHOR_NAME</h5>
              </a>
              <div>COMMENT_2_CONTENT</div>
            </div>
          </div> */}

        </div>
      </div>
    )
  }
}


