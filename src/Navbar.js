import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul className="Navbar-container">
          <li className="Navbar-element">
            <NavLink exact to="/" className="Navbar-link">
              Home
            </NavLink>
          </li>
          <li className="Navbar-element">
            <NavLink exact to="/history" className="Navbar-link">
              History
            </NavLink>
          </li>
          <li className="Navbar-element">
            <NavLink exact to="/tutorial" className="Navbar-link">
              Tutorial
            </NavLink>
          </li>
          <li className="Navbar-element">
            <NavLink exact to="/about" className="Navbar-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
