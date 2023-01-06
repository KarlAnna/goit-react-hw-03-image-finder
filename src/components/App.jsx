import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import axios from 'axios';

import Searchbar from './Searchbar/Searchbar'
import Loader from "./Loader/Loader";
import {fetchImgs} from './services/api'
import ImageGallary from './ImageGallery/ImageGallery'
import Button from "./Button/Button";
import '../styles.css'

class App extends Component {

  state = {
    imgs: null,
    totalImgs: null,
    isLoading: false,
    page: 1,
    query: ''
  }

  searchImgs = async query => {
    if (query.length === 0) {
      return Notify.failure('Please enter something')
    }
    await this.setState({ isLoading: true, query, page: 1 })
    
    fetchImgs(query, this.state.page).then(data => {
      this.setState({ isLoading: false, totalImgs: data.totalHits })
      if (data.hits.length === 0) {
        return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      }
      this.setState({ imgs: data.hits, page: this.state.page + 1 })
    })
  }

  onLoadMore = () => {
    this.setState({ isLoading: true })
    fetchImgs(this.state.query, this.state.page).then(data => {
      this.setState({ isLoading: false, imgs: [...this.state.imgs, ...data.hits], page: this.state.page + 1 })
    })
  }

  render() {
    const {imgs, isLoading, totalImgs} = this.state
    return (
      <div className="app">
        <Searchbar onSubmit={this.searchImgs} />
        {isLoading && <Loader />}
        {imgs !== null ?
          (<>
            <ImageGallary imgs={imgs} />
            {imgs.length !== totalImgs && <Button onClick={this.onLoadMore} />}
          </>)
          : null}
      </div>
    )
  }
}

export default App