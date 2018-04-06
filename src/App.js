import React from 'react'
import { Route, Link } from 'react-router-dom'
import Library from './Library'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

    state = {
        books: []

    }

    // will I eventually need to also add currently, want, etc?
    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    // needs refactor
    updateBook = (book, shelf) => {
        this.setState((currentState) => ({
            books: currentState.books.filter((c) => {
                return c.id !== book.id
            })
        }))

        BooksAPI.update(book)
    }



    render() {
        console.log(this.state)
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <Route exact path="/" render={() => (
                        <Library
                            books={this.state.books}
                        />
                    )} />
                    <Route path="/search" component={Search} />
                    <Route path="/search" render={({ history }) => (
                        <Search
                            onSearch={(query) => {
                            this.search(query)
                            history.push('/')
                        }}
                        />
                    )} />
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
