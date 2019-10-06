import React, { useContext } from 'react';
import { Context } from '../common/store';
import netlify from 'netlify-auth-providers';
import { notification } from 'antd';

/**
 * Sign in with a GitHub Account and increase the API-Limit from 60 to 5000 Calls per hour.
 * The token is saved in in the localStorage.token.
 *
 * @param {*} props
 */
function Login(props) {
  const { dispatch } = useContext(Context);

  const loginAction = () => {
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
        openNotification();
      }
    });
  };

  const openNotification = () => {
    notification.open({
      message: 'Login successful',
      description: 'Welcome!'
    });
  };

  return <>{loginAction()}</>;
}

export default Login;
