import React, { Component } from 'react';

// TODO
export class Test extends Component {
  handleClick() {
    const authenticator = new netlify.default({});

    authenticator.authenticate({ provider: 'github' }, (err, data) => {
      err
        ? alert('Error Authenticating with GitHub: ' + err)
        : alert('Authenticated with GitHub. Access Token: ' + data.token);
    });
  }

  render() {
    return (
      <div>
        <p>
          <a href="#" id="login">
            Authenticate
          </a>
        </p>
      </div>
    );
  }
}

export default Test;
