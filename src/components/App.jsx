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
    isLoading: false
  }

  searchImgs = async q => {
    if (q.length === 0) {
      return Notify.failure('Please enter something')
    }
    this.setState({ isLoading: true })
    
    fetchImgs(q).then(imgs => {
      this.setState({ isLoading: false })
      if (imgs.length === 0) {
        return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      }
      this.setState({ imgs })
    })
  }

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.searchImgs} />
        {this.state.isLoading && <Loader />}
        {this.state.imgs !== null ?
          (<>
            <ImageGallary imgs={this.state.imgs} />
            <Button onClick={this.onLoadMore} />
          </>)
          : null}
      </div>
    )
  }
}

export default App