import React from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom"
import Search from "./search"
import BookList from "./BookList"

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList />
        )}/>
        <Route path="/search" render={() => (
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp
