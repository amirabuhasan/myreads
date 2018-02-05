import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BookDisplay from "./BookDisplay"

class Read extends Component {
  render() {
    const {books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookDisplay
                book={ book }
                changeList={this.props.changeList}
              removeList={this.props.removeList}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
