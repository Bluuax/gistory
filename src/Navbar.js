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
        {store.url !== '' && (
          <>
            <li className="Navbar-element Navbar-odd-element">
              <NavLink exact to="/history" className="Navbar-link" activeClassName="Navbar-link-active">
                History
              </NavLink>
            </li>
            <li className="Navbar-element Navbar-odd-element">
              <NavLink exact to="/stats" className="Navbar-link" activeClassName="Navbar-link-active">
                Stats
              </NavLink>
            </li>
          </>
        )}
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
