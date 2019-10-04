import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../common/store';
import axios from 'axios';
import netlify from 'netlify-auth-providers';
import { humanReadableDateTime } from '../common/helpers';
import { Button, Modal, notification } from 'antd';

function Login(props) {
  const { dispatch } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const [cancel, setCancel] = useState(false);
  const [timeToReset, setTimeToReset] = useState();

  useEffect(() => {
    async function fetchData() {
      const time = await axios.get('https://api.github.com/rate_limit', {
        headers: window.localStorage.token ? { Authorization: `Bearer ${window.localStorage.token}` } : {}
      });
      setTimeToReset(time.data.rate.reset * 1000);
    }
    fetchData();
  }, []);

  const handleOk = e => {
    authenticate();
    props.setState();
  };

  const handleCancel = e => {
    props.setState();
  };

  const authenticate = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (e, data) => {
      e ? console.error(`Error Authenticating with GitHub: ${e}`) : window.localStorage.setItem('token', data.token);
      dispatch({
        type: 'setLoggedIn'
      });
      openNotification();
    });
  };

  const openNotification = () => {
    notification.open({
      message: 'Login successful'
    });
  };

  return (
    <div>
      {timeToReset !== undefined && (
        <Modal
          title="Maximum API-Calls exceeded"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="authenticate" type="primary" onClick={handleOk}>
              Authenticate
            </Button>
          ]}
        >
          <p>Well... This is awkward. Seems like we exceeded the limitations of GitHubs 60 API-Calls per hour.</p>
          <p>But don't worry! We can increase it up to 5000 Calls per hour if you sign in with your GitHub Account!</p>
          <p>Otherwise it resets in: {humanReadableDateTime(timeToReset)}</p>
        </Modal>
      )}
    </div>
  );
}

export default Login;
