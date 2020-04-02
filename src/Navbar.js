import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import { ThemeContext } from './common/contexts/ThemeContext';
import { NavLink } from 'react-router-dom';
import Login from './auth/Login';
import Logout from './auth/Logout';
import { Button, Dropdown, Menu } from 'antd';
import { GithubFilled, BulbFilled, BulbOutlined, DownOutlined } from '@ant-design/icons';
import './Navbar.css';

/**
 * Renders a Navbar that dynamically changes to show two additional entires (History and Stats) if a valid file has been requested.
 */
function Navbar() {
  const { store } = useContext(Context);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [authTrigger, setAuthTrigger] = useState(false);

  const handleAuth = () => {
    setAuthTrigger(!authTrigger);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleAuth}>
        <GithubFilled />
        {store.loggedIn ? 'Logout' : 'Sign in with GitHub'}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={toggleTheme}>
        {isDarkMode ? <BulbOutlined /> : <BulbFilled />}
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
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
                Settings <DownOutlined />
              </Button>
            </Dropdown>
          </li>
        </ul>
      </nav>
      {authTrigger && (store.loggedIn ? <Logout setState={handleAuth} /> : <Login setState={handleAuth} />)}
    </header>
  );
}

export default Navbar;
