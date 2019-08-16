import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <hr className="Footer-line" />
        <p>
          Coded with ♥️ by{' '}
          <a href="https://github.com/Bluuax" className="Footer-link">
            Max
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
