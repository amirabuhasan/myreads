import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookDisplay from "./BookDisplay"

class Bookshelf extends Component {
  render() {
    const {books} = this.props
    const {read} = this.props
    const bookshelves = [
      {name: "currentlyReading",
      title: "Currently Reading"},
      {name: "wantToRead",
      title: "Want To Read"},
      {name: "read",
      title: "Read"}
    ]

    return (
      <div>
        {bookshelves.map((bookshelf) => (
          <div key={bookshelf.name} className="bookshelf">
            <h2 className="bookshelf-title">{bookshelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => book.shelf == bookshelf.name && (
                  <li key={book.id}>
                    <BookDisplay
                      book={ book }
                      books={ books }
                      changeList={this.props.changeList}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}

      </div>

    )
  }
}

export default Bookshelf
