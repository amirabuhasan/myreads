import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    query: '',
    books: [],
    searchErr: false
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const{ query, books } = this.state

    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        results.length > 0 ? this.setState({books: results, searchErr: false })
        : this.setState({ books: [], searchErr: true })
      })
    }

    // let showingBooks
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.name))
    // }




    return (

      // let showingBooks
      // if (query) {
      //
      // }
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
              <div>
                <h3>Search returned { books.length } books </h3>
              </div>
              <ol className="books-grid">
                {books.map((book) => (
                  <li>
                    <p>{book.title}</p>
                  </li>
                ))}
              </ol>
            </div>

          )}

        </div>
      </div>
    )
  }
}


export default Search
