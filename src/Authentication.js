import React, { Component } from 'react';
import netlify from 'netlify-auth-providers';

export class Authentication extends Component {
  handleClick = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github' }, (err, data) => {
      err
        ? console.error(`Error Authenticating with GitHub: ${err}`)
        : window.localStorage.setItem('token', data.token);
    });
  };

  render() {
    return (
      <div>
        <p>
          <a href="#" onClick={this.handleClick}>
            {/* TODO */}
            Authenticate
          </a>
        </p>
      </div>
    );
  }
}

export default Authentication;
