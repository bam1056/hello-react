import React, { Component } from 'react';
import './Footer.css';
import extra from './extra.jpg'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <footer>
      <div className="footerLogo">
      <img src={extra} width="100" height="100" alt="my headshot"/>
      <h6>Brett's Blog, Inc.</h6>
      </div>
      <div className="footerNav">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
      </div>
      </footer>
      </div>
  )
  }
}

export default Footer;
