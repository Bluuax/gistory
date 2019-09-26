import React, { useContext } from 'react';
import { Context } from './common/store';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { store } = useContext(Context);
  return (
    <nav className="Navbar">
      <ul className="Navbar-container">
        <li className="Navbar-element">
          <NavLink exact to="/" className="Navbar-link" activeClassName="Navbar-link-active">
            Search
          </NavLink>
        </li>
        {store.source.commitSource !== '' && store.source.contentSource !== '' && (
          <li className="Navbar-element">
            <NavLink exact to="/history" className="Navbar-link" activeClassName="Navbar-link-active">
              History
            </NavLink>
          </li>
        )}
        <li className="Navbar-element">
          <NavLink exact to="/tutorial" className="Navbar-link" activeClassName="Navbar-link-active">
            Tutorial
          </NavLink>
        </li>
        <li className="Navbar-element">
          <NavLink exact to="/about" className="Navbar-link" activeClassName="Navbar-link-active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
