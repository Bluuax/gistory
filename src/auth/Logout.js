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
    props.setState();
  };

  const openSuccessNotification = () => {
    notification.open({
      message: 'Logout successful'
    });
  };

  // TODO
  return <>{logoutAction()}</>;
}

export default Logout;
