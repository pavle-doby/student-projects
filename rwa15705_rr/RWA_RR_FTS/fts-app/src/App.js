import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuoteList  from "./components/quote-list";
import QuoteFinder  from "./components/quote-finder";
import QuoteAdd  from "./components/quote-add";
import QuoteSort from "./components/quote-sort";
import ImageList from "./components/image-list";
import ImageCarousel from './components/image-carousel';
import ImageAdd from './components/image-add';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>         
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <h1><a className="badge badge-primary" href="#">Pozitiva</a></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <QuoteSort> </QuoteSort>              
            <QuoteFinder> </QuoteFinder>
          </div>
      </nav>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="outer">
        <div className="middle">
          <div className="inner">
            <ImageAdd></ImageAdd>
            <ImageCarousel></ImageCarousel>
            <QuoteAdd></QuoteAdd>                       
            <QuoteList></QuoteList>
          </div>
        </div>
      </div>
      
      </div>
    );
  }
}

export default App;
