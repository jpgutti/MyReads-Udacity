import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import { Debounce } from 'react-throttle';

class Search extends Component {

	state = {
		query : '',
		books : []

	}

	static PropTypes = {
			books: PropTypes.array.isRequired
		}

	updateQuery = (query) => {
		this.setState({ query },
		() => {
			if(query.length > 0) {
				this.getAllBooks();
			}
		}
	)};

	getAllBooks = () => {
		console.log(this.state.query)
	    BooksAPI.search(this.state.query, 20).then((result) => {
		result = result.map(book => {
			let userBook = this.props.books.find(b => b.id === book.id)
			if(userBook){
				book.shelf = userBook.shelf
			}
			return book
		})
			this.setState({ books : result})
	    });
  	}


	render(){
		let showingBooks = this.state.books;
		console.log(showingBooks)
		return(
			<div className="search-books">
			    <div className="search-books-bar">
			      <Link className="close-search" to="/">Close</Link>
			      <div className="search-books-input-wrapper">
			      	<Debounce time="500" handler="onChange">
			        <input 	type="text" 
			        		placeholder="Search by title or author"
			        		onChange={event => this.updateQuery(event.target.value) }

			        />
			        </Debounce>

			      </div>
			    </div>
			    <div className="search-books-results">
              		<ol className="books-grid">
					      	{showingBooks.map((books, index) => (
					      		<li key={index}>
				                    <div className="book">
				                      <div className="book-top">
				                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})`}}></div>
				                        <div className="book-shelf-changer">
				                          <select value={!books.shelf ? 'none' : books.shelf} onChange={ event => this.props.addBook(books, event.target.value)}>
				                            <option value="Move" disabled>Move to...</option>
				                            <option value="currentlyReading">Currently Reading</option>
				                            <option value="wantToRead">Want to Read</option>
				                            <option value="read">Read</option>
				                            <option value="none">None</option>
				                          </select>
				                        </div>
				                      </div>
				                      <div className="book-title">{books.title}</div>
				                      <div className="book-authors">{books.authors}</div>
				                    </div>
				                </li>
					      	))}
					</ol>
            	</div>
			</div>
		)
	}

}

export default Search
            

       //      <div className="search-books-results">
			    //   <ol className="books-grid">
			    		// <li>
	      //               <div className="book">
	      //                 <div className="book-top">
	      //                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}></div>
	      //                   <div className="book-shelf-changer">
	      //                     <select>
	      //                       <option value="none" disabled>Move to...</option>
	      //                       <option value="currentlyReading">Currently Reading</option>
	      //                       <option value="wantToRead">Want to Read</option>
	      //                       <option value="read">Read</option>
	      //                       <option value="none">None</option>
	      //                     </select>
	      //                   </div>
	      //                 </div>
	      //                 <div className="book-title">{books.title}</div>
	      //                 <div className="book-authors">{books.author}</div>
	      //               </div>
	      //           </li>
			    //   </ol>
			    // </div>