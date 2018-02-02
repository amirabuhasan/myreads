import React, { Component } from 'react'
import BookDisplay from './BookDisplay'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    if (query) {
      BooksAPI.search(query, 20).then((response) => {
        response.length > 0 ? this.setState({books: response})
        : this.setState({ books: []})
      })
    } else {
      this.setState({books: []})
    }
  }

  render() {
    const{ query, books, searchError } = this.state


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {books.length > 0 && (
            <div>
              <h3>Your search returned { books.length } books.</h3>
            </div>
          )}
            <div>
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <BookDisplay
                    book={ book }>
                  </BookDisplay>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}


export default Search
