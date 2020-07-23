import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()

    this.state = {
      movies: [],
    }
  }

  render() {
    return <div>I am the list component</div>
  }
}
export default List