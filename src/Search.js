import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component {

    state = {
        query: '',
        books: []
    }

    search = (query) => {
        if(query && query.length !== 0) {
            BooksAPI.search(query)
            .then((books) => {
                this.setState(() => ({
                    query,
                    books
                }))
            })
        }
    }

    render() {
        const { query, books } = this.state

        console.log("value", query)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                          type="text"
                          onChange={(event) => this.search(event.target.value)}
                          placeholder="Search by title or author"
                          value={query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                  <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                      <select>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Search;
