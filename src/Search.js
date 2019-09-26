import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import Footer from './Footer';
import { Input, Button, message, notification } from 'antd';
import './Search.css';

function Search() {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(Context);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (verifyInput(input)) {
      // dispatch({ type: 'set', value: input });
      dispatch({
        type: 'set',
        value: 'https://api.github.com/repos/bluuax/gistory/commits?sha=master&path=src/App.js'
      });
      // TODO: history.push
    } else {
      // TODO: Snackbar
      error();
      openNotification();
    }
    /* TODO 
        verify that state is set and not empty
    
        if File is found and valid 
        --> route to history 
        else route to error page or display error here
    */
  };

  const verifyInput = input => {
    if (input !== '') {
      return true;
    } else {
      return false;
    }
  };

  const error = () => {
    message.error('Wie viele Kuhs hat das H?');
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <div className="Search">
      <h1 className="Search-title">Gistory</h1>
      <h3>Type the GitHub URL into the Textbox</h3>
      <Input size="large" value={input} onChange={handleChange} placeholder="GitHub-URL" />
      <Button onClick={handleClick} type="primary">
        Go
      </Button>
      {/*TODO: If Site is found --> History.js routen else --> 404-Page or show error only -->*/}
      <Footer />
    </div>
  );
}

export default Search;
