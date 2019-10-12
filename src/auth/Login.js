import { useContext } from 'react';
import { Context } from '../common/store';
import netlify from 'netlify-auth-providers';
import { notification } from 'antd';

/**
 * Allows a sign in with a GitHub account which increases the GitHub API-Limit from 60 to 5000 Calls per hour.
 * Recieves an OAuth access token which is saved in localStorage.token.
 *
 * @param {function} props.setState - Sets the authTrigger state in the parent Component
 */
function Login(props) {
  const { dispatch } = useContext(Context);

  // Set the value of authTrigger to false in Navbar
  props.setState();

  const authenticator = new netlify({});
  authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (e, data) => {
    if (e) {
      console.error(`Error Authenticating with GitHub: ${e}`);
    } else {
      window.localStorage.setItem('token', data.token);
      dispatch({
        type: 'setLoggedIn',
        value: true
      });

      notification.open({
        message: 'Login successful',
        description: 'Welcome!'
      });
    }
  });

  return null;
}

export default Login;
