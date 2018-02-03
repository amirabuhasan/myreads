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
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((wantToRead) => {
      this.setState({ wantToRead })
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
              <div>
                <WantToRead
                books={this.state.wantToRead}/>
                <CurrentlyReading
                books={this.state.currentlyReading}/>
                <Read
                books={this.state.read}/>
              </div>
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
          <Search />
        )}/>
    </div>

    )
  }
}

export default BooksApp
