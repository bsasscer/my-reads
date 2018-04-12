import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

    state = {
        query: '',
        searchResults: []
    }

    // TODO: refactor so the correct read status shows for books that are already on shelves

    handleSearch(e) {
        if (e.target.value !== '') {
            this.setState({ query: e.target.value })
            BooksAPI.search(this.state.query)
            .then(searchResults => {
                this.setState({ searchResults })
            })
        } else {
            this.setState({ searchResults: [] })
        }
        this.findShelvedBooks();
    }

    // getting a cannot read property 'book' of undefined
    findShelvedBooks(searchResults, shelvedBooks) {
        this.props.shelvedBooks.forEach(book => console.log('BOOK IDs - ' + book.id));
        this.state.searchResults.forEach(result => console.log('RESULT IDs - ' + result.id));

        for (let i = 0; i < this.state.searchResults.length; i++) {
            for (let j = 0; j < this.props.shelvedBooks.length; j++) {
                if (shelvedBooks.book.id === searchResults.result.id) {
                    console.log('MATCH' + shelvedBooks.book.id);
                }
            }
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
