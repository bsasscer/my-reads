import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Book extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateShelf(this.props.book, e.target.value);
        BooksAPI.update(this.props.book, e.target.value);
    }

    findShelvedBooks(searchResult) {
        const defaultShelf = 'none';
        if (searchResult.shelf) {
            return searchResult.shelf;
        } else {
            const match = this.props.shelvedBooks.filter(
                book => book.id === searchResult.id
            )
            if (!Array.isArray(match) || !match.length) {
                return defaultShelf;
            } else {
                return match[0].shelf;
            }
        }
    }

    getCoverImage(book) {
        if (book.imageLinks && book.imageLinks.thumbnail !== undefined) {
            return `url(${book.imageLinks.thumbnail})`;
        } else {
            return `url('/images/book-cover-blank.png')`;
        }
    }

    render() {

        const { book } = this.props;


        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `${this.getCoverImage(book)}` }}></div>
                        <div className="book-shelf-changer">
                            <form>
                                <select defaultValue={this.findShelvedBooks(book)} onChange={this.handleChange}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        );
    }
}

export default Book
