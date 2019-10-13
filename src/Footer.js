import React, { useContext } from 'react';
import { ThemeContext } from './common/contexts/ThemeContext';
import './Footer.css';

const useStyles = isDarkMode => {
  return {
    color: isDarkMode ? 'white' : 'black'
  };
};

function Footer() {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = useStyles(isDarkMode);

  return (
    <footer className="Footer" style={styles}>
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
