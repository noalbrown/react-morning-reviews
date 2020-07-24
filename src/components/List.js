import React, { Component } from 'react';
import movies from '../data/movies.json';
import ListItem from './ListItem';
import Form from './Form';

class List extends Component {
  constructor() {
    super()
    this.state = {
      movies: movies
    }
    this.addMovie = this.addMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  addMovie(title, year, posterImg) {
    const id = this.state.movies[this.state.movies.length - 1].id + 1
    const newMovie = { id, title, year, posterImg }
    const newArr = [...this.state.movies, newMovie]

    this.setState({
      movies: newArr
    })
  }

  deleteMovie(id) {
    const index = this.state.movies.findIndex(movie => movie.id === id)
    const newArr = [...this.state.movies]
    newArr.splice(index, 1)

    this.setState({
      movies: newArr
    })
  }


  render() {
    const moviesMap = this.state.movies.map(elem => {
      return <ListItem deleteMovie={this.deleteMovie} key={elem.id} movie={elem} />
    })
    return <div className="List">
      <Form addMovie={this.addMovie} />
      {moviesMap}
    </div>
  }
}
export default List