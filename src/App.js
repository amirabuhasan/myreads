import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Search from "./search"
import BookList from "./BookList"
import CurrentlyReading from "./CurrentlyReading"
import Read from "./Read"
import WantToRead from "./WantToRead"

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  changeList = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }));
    });
   };

  removeList = (book) => {
    this.setState((state) => ({
      [book.shelf]: state[book.shelf].filter((b) => b.id !== book.id)

    }))
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

                <CurrentlyReading
                books={this.state.books}
                read={this.state.read}
                changeList={this.changeList}
                removeList={this.removeList}/>

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
          <Search/>
        )}/>
    </div>

    )
  }
}

export default BooksApp
