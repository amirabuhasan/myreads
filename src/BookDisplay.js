import React, { Component } from 'react'

class BookDisplay extends Component {
  render() {
    const { book } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              value={ book.shelf }
              // when a user selects an option from the dropdown, calls .changeList to change the shelf of the book to the selected value.
              onChange={ (e) => { this.props.changeList(book, e.target.value) } }>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors }</div>
      </div>
    )
  }
}

export default BookDisplay
