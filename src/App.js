import React, { Component } from 'react';
import Header from './Header.js';
import Article from './Article.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
