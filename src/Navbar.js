import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import { NavLink } from 'react-router-dom';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Button, Dropdown, Menu, Icon } from 'antd';
import './Navbar.css';

/**
 * Renders a Navbar that dynamically changes to show two additional entires (History and Stats) if a valid file has been requested.
 */
function Navbar() {
  const { store } = useContext(Context);
  const [authTrigger, setAuthTrigger] = useState(false);

  const handleAuth = () => {
    setAuthTrigger(!authTrigger);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleAuth}>
        <Icon type="github" />
        {store.loggedIn ? 'Logout' : 'Sign in with GitHub'}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Icon type="bulb" />
        Light Mode
      </Menu.Item>
      <Menu.Item>
        <Icon type="bulb" theme="filled" />
        Dark Mode
      </Menu.Item>
    </Menu>
  );

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
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="default" size="small" shape="round">
                Settings <Icon type="down" />
              </Button>
            </Dropdown>
          </li>
        </ul>
      </nav>
      {authTrigger && (store.loggedIn ? <Logout setState={handleAuth} /> : <Login setState={handleAuth} />)}
    </>
  );
}

export default Navbar;
