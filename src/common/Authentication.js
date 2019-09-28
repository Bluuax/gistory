import React from 'react';
import netlify from 'netlify-auth-providers';

function Authentication() {
  const handleClick = () => {
    const authenticator = new netlify({});
    authenticator.authenticate({ provider: 'github', scope: '(no scope)' }, (e, data) => {
      e ? console.error(`Error Authenticating with GitHub: ${e}`) : window.localStorage.setItem('token', data.token);
    });
  };

  return (
    <div>
      {/* TODO: Add GitHub Sign In Button styling */}
      <button onClick={handleClick}>Authenticate</button>
    </div>
  );
}

export default Authentication;
