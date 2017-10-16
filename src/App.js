import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {this.setState({ books }) });
    
  }



  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <Search
            />
          )}/>
        <Route exact path="/" render={() => (
            <BookShelf books={this.state.books} 
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
