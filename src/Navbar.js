import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import { NavLink } from 'react-router-dom';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Button, Icon } from 'antd';
import './Navbar.css';

function Navbar() {
  const { store } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
          {store.loggedIn ? (
            <li className="Navbar-element">
              <Button onClick={handleClick}>
                <Icon type="logout" />
              </Button>
            </li>
          ) : (
            <li className="Navbar-element">
              <Button onClick={handleClick}>
                <Icon type="login" />
              </Button>
            </li>
          )}
        </ul>
      </nav>
      {showModal && (window.localStorage.token ? <Logout setState={handleClick} /> : <Login setState={handleClick} />)}
    </>
  );
}

export default Navbar;
