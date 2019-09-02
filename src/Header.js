import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <ul className="Header-container">
            <li className="Header-element">
              <a href="/" className="Header-link">
                Home
              </a>
            </li>
            <li className="Header-element">
              <a href="/" className="Header-link">
              History
              </a>
            </li>
            <li className="Header-element">
              <a href="/" className="Header-link">
                Tutorial
              </a>
            </li>
            <li className="Header-element">
              <a href="/" className="Header-link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
