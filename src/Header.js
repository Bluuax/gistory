import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <ul className="Header-container">
            <li className="Header-element">
              <a href="" className="Header-link">
                Landing/Search
              </a>
            </li>
            <li className="Header-element">
              <a href="" className="Header-link">
                How To Use
              </a>
            </li>
            <li className="Header-element">
              <a href="" className="Header-link">
                History
              </a>
            </li>
            <li className="Header-element">
              <a href="" className="Header-link">
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
