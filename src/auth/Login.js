import React, { useContext } from 'react';
import { Context } from '../common/store';
import netlify from 'netlify-auth-providers';
import { notification } from 'antd';

function Login(props) {
  const { dispatch } = useContext(Context);

  const loginAction = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (e, data) => {
      if (e) {
        console.error(`Error Authenticating with GitHub: ${e}`);
      } else {
        window.localStorage.setItem('token', data.token);
        props.setState();
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
