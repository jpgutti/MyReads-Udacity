import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Search extends Component {

	state = {
		query : ''

	}

	static PropTypes = {
			thatBooks: PropTypes.array.isRequired
		}

	// BooksAPI.search().then((books) => {this.setState({ thatBooks : books }) });

	render(){
		console.log(this.props);
		let showingBooks = this.props.thatBooks;
		
		return(
			<div className="search-books">
			    <div className="search-books-bar">
			      <Link className="close-search" to="/">Close</Link>
			      <div className="search-books-input-wrapper">
			        <input type="text" placeholder="Search by title or author"/>

			      </div>
			    </div>
			    <div className="search-books-results">
              		<ol className="books-grid">
              			{showingBooks.map((books, index) => (
              				<p key={index}>{books.title}</p>
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
			    //   	{showingBooks.map((books, index) => (
			    //   	<li key={books.id}>
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
			    //   	))}
			    //   </ol>
			    // </div>