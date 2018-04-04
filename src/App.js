import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookList from './BookList'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
      books: []
  }


      componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }))
        })
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
                    <BookList
                        books={this.state.books}
                    />
                )} />
                <Route path="/search" component={Search} />
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
    )
  }
}

export default BooksApp
