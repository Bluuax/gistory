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
    try {
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
    } catch (e) {
      // TODO: Snackbar
      error();
      openNotification();
    }
  };

  const handleDemo = () => {
    const source = {
      url: 'https://github.com/Bluuax/gistory/blob/master/src/App.js',
      commitUrl: 'https://api.github.com/repos/Bluuax/gistory/commits?sha=master&path=src/App.js',
      contentUrl: 'https://api.github.com/repos/Bluuax/gistory/contents/src/App.js?ref='
    };

    dispatch({
      type: 'setSource',
      value: source
    });
    props.history.push('/history');
  };

  const error = () => {
    message.error(`File couldn't be found...`);
  };

  const openNotification = () => {
    notification.open({
      message: 'Error',
      description: `File couldn't be found...`
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
      <div>
        <Button onClick={handleClick} type="primary">
          Go
        </Button>
        <Button onClick={handleDemo}>Demo</Button>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
