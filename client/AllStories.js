import React, {Component} from 'react'
import axios from 'axios'
import Stories from './Stories'

export default class AllStories extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  async componentDidMount () {
    try {
      const storiesResponse = await axios.get('/api/stories')
      this.setState({ stories: storiesResponse.data })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return <Stories stories={this.state.stories} />
  }
}
