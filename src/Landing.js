import React, { Component } from 'react';
import './Landing.css';

export class Landing extends Component {
  render() {
    // dsddd
    return (
      <div className="Landing">
        <h1 className="Landing-title">Gistory</h1>
        <h3>Let's search for a File</h3>
        <input type="text" />
        <button>Go</button>

        {/*TODO: If Site is found --> History.js routen else --> 404-Page or show error only -->*/}
      </div>
    );
  }
}

export default Landing;
