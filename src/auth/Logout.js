import React, { useContext } from 'react';
import { Context } from '../common/store';
import { notification } from 'antd';

function Logout(props) {
  const { dispatch } = useContext(Context);

  const logoutAction = () => {
    window.localStorage.clear();
    dispatch({
      type: 'setLoggedIn'
    });
    openSuccessNotification();
  };

  const openSuccessNotification = () => {
    notification.open({
      message: 'Logout successful'
    });
  };

  return (
    <>
      {logoutAction()}
      {props.history.push('/')}
    </>
  );
}

export default Logout;
