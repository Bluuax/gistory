import React, { useState, useEffect } from 'react';
import axios from 'axios';
import netlify from 'netlify-auth-providers';
import { humanReadableDateTime } from './helpers';
import { Button, Modal } from 'antd';

function Authentication(props) {
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
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
    setCancel(true);
  };

  const authenticate = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (e, data) => {
      e ? console.error(`Error Authenticating with GitHub: ${e}`) : window.localStorage.setItem('token', data.token);
      props.history.push('/history');
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
      {timeToReset !== undefined && !visible && cancel && (
        <>
          <h2>So you don't wan't to sign in. In that case enjoy a cat video until the time is up!</h2>
          <h3>{humanReadableDateTime(timeToReset)}</h3>
        </>
      )}
    </div>
  );
}

export default Authentication;
