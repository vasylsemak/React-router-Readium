import React, { Component } from 'react'
import axios from 'axios'

export default class SingleStory extends Component {
  constructor() {
    super()
    this.state = { story: {} }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/stories/${this.props.match.params.id}`)
      this.setState({ story: data }, () => {
        console.log("DDD->", this.state.story)
      })
    } catch (error) { console.error(error) }
  }

  render() {
    const story = this.state.story
    const content = story.content || ''
    const comments = this.state.story.comments

    console.log(" Match ===> ", this.props.match.params)
    console.log(" State ===> ", this.state)

    return (
      <div id='single-story' className='column'>
        <h1>{story.title}</h1>
        {
          content
            .split('\n')
            .map((line, idx) => <p key={idx}>{line}</p>)
        }
        <h3>Responses:</h3>
        <div id='comments'>
          {comments.map((c, idx) => (
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

        </div>
      </div>
    )
  }
}

    // author: {id: 1, name: "Cody", bio: "A friendly pug", imageUrl: "cody.jpg", createdAt: "2020-11-24T22:47:09.202Z", …}
    // authorId: 1
    // comments: (2) [{…}, {…}]
    // content: "Brunch Shoreditch."
    // createdAt: "2020-11-24T22:47:09.219Z"
    // id: 1
    // imageUrl: ""
    // title: "A bone to pick with jQuery"


// const fakeStory = {
//   title: 'Ships',
//   id: 2,
//   content: "A ship in port is safe,\nbut that's not what ships are built for",
//   author: {
//     id: 1,
//     name: 'Grace Hopper'
//   },
//   comments: [
//     {
//       id: 4,
//       content: 'I like ships!',
//       author: {
//         id: 2,
//         name: 'Alan Turing',
//         imageUrl: 'default-author.png'
//       }
//     }
//   ]
// }
