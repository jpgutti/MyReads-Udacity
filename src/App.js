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

  updateShelf(book, shelf){
    BooksAPI.update(book, shelf).then(() => { this.setState({ books: this.state.books.filter((b) => b.id !== book.id).concat([book]) }) });
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
