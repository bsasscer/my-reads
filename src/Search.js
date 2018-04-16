import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

    state = {
        query: '',
        searchResults: []
    }

    handleSearch(e) {
        if (e.target.value !== '') {
            this.setState({ query: e.target.value })
            BooksAPI.search(this.state.query)
            .then(searchResults => {
                this.setState({ searchResults: !searchResults || searchResults.error ? [] : searchResults })
            })
        } else {
            this.setState({ searchResults: [] })
        }
    }


    render() {
        let searchResults = this.state.searchResults;


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
                          onChange={this.handleSearch.bind(this)}
                          placeholder="Search by title or author"
                        />
                    </div>
                </div>
                {this.state.searchResults !== undefined && (
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {searchResults.map((book) => (
                                <Book
                                    book={book}
                                    key={book.id}
                                    shelf={book.shelf}
                                    updateShelf={this.props.updateShelf}
                                    shelvedBooks={this.props.shelvedBooks}
                                />
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        )
    }
}


export default Search
