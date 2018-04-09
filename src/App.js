import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shelvedBooks: [],
            shelves: [
                {
                    id: "currentlyReading",
                    name: "Currently Reading"
                },
                {
                    id: "wantToRead",
                    name: "Want to Read"
                },
                {
                    id: "read",
                    name: "Read"
                }
            ]
        };
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((shelvedBooks) => {
            this.setState(() => ({
                shelvedBooks
            }))
        })
    }

    updateShelf = (bookToAdd, shelf) => {
        this.setState(state => {
            const nextState = state.shelvedBooks.filter(book => book.id !== bookToAdd.id).concat([{...bookToAdd, shelf}]);
            return { shelvedBooks: nextState };
        });
        alert('Your book status is set to: ' + shelf);
    }

    render() {
        const { books, value, shelvedBooks, shelves } = this.state;

        console.log(this.state)

        return (
            <div className="app">
                <Route path="/search" render={({ history }) => (
                    <Search
                        shelvedBooks={shelvedBooks}
                        updateShelf={this.updateShelf}
                        onSearch={(query) => {
                        this.search(query)
                        history.push('/')
                    }}
                    />
                )} />
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            {shelves.map(shelf => (
                                <BookShelf
                                    key={shelf.id}
                                    shelf={shelf}
                                    shelvedBooks={shelvedBooks}
                                    books={shelvedBooks.filter(shelvedBooks => {
                                        return shelvedBooks.shelf === shelf.id;
                                    })}
                                    updateShelf={this.updateShelf}
                                />
                            ))}
                        </div>
                    </div>
                )} />
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksApp
