import React, { Component } from 'react';
import './Landing.css';

export class Landing extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleClick = () => {
    console.log('HANDLEINPUT');
    console.log(this.state.input);

    /* TODO 
        verify that state is set and not empty
    
        if File is found and valid 
        --> route to history 
        else route to error page or display error here
    */
  };

  render() {
    return (
      <div className="Landing">
        <h1 className="Landing-title">Gistory</h1>
        <h3>Type the GitHub URL into the Textbox</h3>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Go</button>

        {/*TODO: If Site is found --> History.js routen else --> 404-Page or show error only -->*/}
      </div>
    );
  }
}

export default Landing;
