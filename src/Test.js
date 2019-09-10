import React, { Component } from 'react';
import netlify from 'netlify-auth-providers';

// TODO
export class Test extends Component {
  handleClick = () => {
    console.log('####');
    const authenticator = new netlify.default({});

    authenticator.authenticate({ provider: 'github' }, (err, data) => {
      err
        ? alert('Error Authenticating with GitHub: ' + err)
        : alert('Authenticated with GitHub. Access Token: ' + data.token);
    });
  };

  render() {
    return (
      <div>
        <p>
          <a href="#" id="login" onClick={this.handleClick}>
            Authenticate
          </a>
        </p>
      </div>
    );
  }
}

export default Test;
