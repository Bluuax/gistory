import React, { useContext } from 'react';
import { Context } from '../common/store';
import { notification } from 'antd';

/**
 * Allows a logout and deletes the token saved in localStorage.
 * This decreaes the GitHub API-Limit from 60 to 5000 Calls per hour.
 *
 * @param {*} props
 * @param {Method} props.setState Sets the authTrigger state in the parent Component
 */
function Logout(props) {
  const { dispatch } = useContext(Context);

  const logoutAction = () => {
    window.localStorage.clear();
    props.setState();

    dispatch({
      type: 'setLoggedIn',
      value: false
    });
    openNotification();
  };

  const openNotification = () => {
    notification.open({
      message: 'Logout successful',
      description: 'Farewell...'
    });
  };

  return <>{logoutAction()}</>;
}

export default Logout;
