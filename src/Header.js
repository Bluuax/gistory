import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <ul class="Header-container">
            <li className="Header-element">
              <a href="" class="Header-link">
                Landing/Search
              </a>
            </li>
            <li className="Header-element">
              <a href="" class="Header-link">
                How To Use
              </a>
            </li>
            <li className="Header-element">
              <a href="" class="Header-link">
                History
              </a>
            </li>
            <li className="Header-element">
              <a href="" class="Header-link">
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
