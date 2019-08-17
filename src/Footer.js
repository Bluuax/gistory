import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <hr className="Footer-line" />
        <p>
          Coded with lots of 🍊🥤 by{' '}
          <a href="https://github.com/Bluuax" target="_blank" rel="noopener" className="Footer-link">
            Max
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
