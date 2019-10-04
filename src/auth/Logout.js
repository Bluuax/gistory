import React, { useContext } from 'react';
import { Context } from '../common/store';
import { notification } from 'antd';

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
