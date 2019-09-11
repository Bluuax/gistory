import React, { Component } from 'react';
import netlify from 'netlify-auth-providers';

export class Authentication extends Component {
  handleClick = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (err, data) => {
      err
        ? console.error(`Error Authenticating with GitHub: ${err}`)
        : window.localStorage.setItem('token', data.token);
    });
  };

  render() {
    return (
      <div>
        {/* TODO: GitHub - sign in styling */}
        <button onClick={this.handleClick}>Authenticate</button>
      </div>
    );
  }
}

export default Authentication;
