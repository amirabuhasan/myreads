import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookDisplay from "./BookDisplay"

class WantToRead extends Component {
  render() {
    const {books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookDisplay book={ book }/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
