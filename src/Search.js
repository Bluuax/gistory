import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import Footer from './Footer';
import { Input, Button, message, notification } from 'antd';
import './Search.css';

function Search(props) {
  const [input, setInput] = useState('');
  const { store } = useContext(Context);
  const { dispatch } = useContext(Context);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (verifyInput(input)) {
      // https://github.com/Bluuax/gistory/blob/master/README.md
      // https://github.com/Bluuax/gistory/blob/master/src/App.js

      const splits = input.split('github.com/')[1].split('/');
      console.log(splits);
      const owner = splits[0];
      const repo = splits[1];
      const branch = splits[3];

      // TODO: refactor
      let tmp = '';
      for (let i = 4; i < splits.length; i++) {
        tmp += splits[i] + '/';
      }
      const path = tmp.slice(0, -1);

      const source = {
        url: input,
        commitUrl: `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&path=${path}`,
        contentUrl: `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=`
      };

      dispatch({
        type: 'setSource',
        value: source
      });
      props.history.push('/history');
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
      }
    });
  };

  return (
    <div className="Search">
      <h1 className="Search-title">Gistory</h1>
      <h3>Type the GitHub URL into the Textbox</h3>
      <Input
        size="large"
        value={input}
        onChange={handleChange}
        placeholder={store.source.url !== '' ? store.source.url : 'GitHub-URL'}
      />
      <Button onClick={handleClick} type="primary">
        Go
      </Button>
      {/*TODO: If Site is found --> History.js routen else --> 404-Page or show error only -->*/}
      <Footer />
    </div>
  );
}

export default Search;
