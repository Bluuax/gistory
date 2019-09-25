import React, { useState, useContext } from 'react';
import { Context } from './common/store';
import Footer from './Footer';
import './Landing.css';

function Landing() {
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
      alert('Error');
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

  return (
    <div className="Landing">
      <h1 className="Landing-title">Gistory</h1>
      <h3>Type the GitHub URL into the Textbox</h3>

      {/* TODO: Add proper Form */}
      <form action=""></form>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Go</button>

      {/*TODO: If Site is found --> History.js routen else --> 404-Page or show error only -->*/}
      <Footer />
    </div>
  );
}

export default Landing;
