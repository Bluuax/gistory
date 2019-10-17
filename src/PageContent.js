import React, { useContext } from 'react';
import { ThemeContext } from './common/contexts/ThemeContext';

/**
 * A simple container which selects and displays the theme (light/dark) of the App.
 *
 * @param {*} props - React props
 */
export function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? '#34495e' : '#f7f8fa',
    minHeight: '100vh',
    minWidth: '100vw'
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContent;
