import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <h1>Brett's Blog</h1>
        <ul className="links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>
  )
  }
}

export default Header;
