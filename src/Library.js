import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'


class Library extends Component {

    state = {
        want: [
            {
                "id": "1",
                "title": "To Kill a Mockingbird",
                "authors": "Harper Lee",
                "imageLinks": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
             },
             {
                "id": "2",
                "title": "Ender's Game",
                "authors": "Orson Scott Card",
                "imageLinks": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
             },
             {
                "id": "3",
                "title": "1776",
                "authors": "David McCullough",
                "imageLinks": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
             }
        ],
        read: [
            {
                "id": "4",
                "title": "To Kill a Mockingbird",
                "authors": "Harper Lee",
                "imageLinks": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
             },
             {
                "id": "5",
                "title": "Ender's Game",
                "authors": "Orson Scott Card",
                "imageLinks": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
             },
             {
                "id": "6",
                "title": "1776",
                "authors": "David McCullough",
                "imageLinks": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
             }
        ]

    }

    // select = (value) => {
    //     BooksAPI.update(book, shelf)
    //     .then((books) => {
    //         this.setState(() => ({
    //             books
    //         }))
    //     })
    // }

    render() {

        const { books } = this.props
        const { want, read } = this.state

        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                      <ShelfChanger />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {want.map((want) => (
                            <li key={want.id}>
                                <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${want.imageLinks})` }}></div>
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
                                    <div className="book-title">{want.title}</div>
                                    <div className="book-authors">{want.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map((read) => (
                            <li key={read.id}>
                                <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${read.imageLinks})` }}></div>
                                      <div className="book-shelf-changer">
                                        <select>
                                          <option value="none" disabled>Move to...</option>
                                          <option value="currentlyReading">Currently Reading</option>
                                          <option value="wantToRead">Want to Read</option>
                                          <option value="read">Read</option>
                                          <option value="none" >None</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="book-title">{read.title}</div>
                                    <div className="book-authors">{read.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Library;
