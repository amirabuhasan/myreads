import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Search from "./search"
import Bookshelf from "./Bookshelf"


class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Gets books from server and adds it to state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Takes the book object and shelf name, and calls .update method to change the shelf of a book. Updates the app state after.
  changeList = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    })
   }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf
              books={this.state.books}
              read={this.state.read}
              changeList={this.changeList}
              />
            </div>
            <div className="open-search">
              <Link
                to="/search"
                >Add a book
              </Link>
            </div>
          </div>
            )}/>
          <Route path="/search" render={() => (
            <Search
            booksOnShelf={this.state.books}
            changeList={this.changeList}/>
          )}/>
      </div>
      )
    }
  }

  export default BooksApp
