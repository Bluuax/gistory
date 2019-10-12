import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <hr className="Footer-line" />
      <p>
        Coded with lots of{' '}
        <span role="img" aria-label="orange">
          🍊
        </span>
        <span role="img" aria-label="juice">
          🥤
        </span>{' '}
        by{' '}
        <a href="https://github.com/Bluuax" target="_blank" rel="noopener noreferrer" className="Footer-link">
          Max
        </a>
      </p>
    </footer>
  );
}

export default Footer;
