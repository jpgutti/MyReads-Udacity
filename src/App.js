import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: [],
    thatBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {this.setState({ books }) });
  }

  updateShelf(id, shelf){
    BooksAPI.update(id, shelf);
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
            <Search thatBooks={this.state.thatBooks}
            />
          )}/>
        <Route exact path="/" render={() => (
            <BookShelf books={this.state.books} update={this.updateShelf}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
