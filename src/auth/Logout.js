import { useContext } from 'react';
import { Context } from '../common/store';
import { notification } from 'antd';

/**
 * Allows a logout and deletes the access token saved in localStorage.
 * This decreaes the GitHub API-Limit from 60 to 5000 Calls per hour.
 *
 * @param {Method} props.setState - Sets the authTrigger state in the parent Component
 */
function Logout(props) {
  const { dispatch } = useContext(Context);

  // Set the value of authTrigger to false in Navbar
  props.setState();

  window.localStorage.clear();
  dispatch({
    type: 'setLoggedIn',
    value: false
  });

  notification.open({
    message: 'Logout successful',
    description: 'Farewell...'
  });

  return null;
}

export default Logout;
