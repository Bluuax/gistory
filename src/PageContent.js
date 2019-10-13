import React, { useContext } from 'react';
import { ThemeContext } from './common/contexts/ThemeContext';

export function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? '#34495e' : '#f7f8fa',
    height: '100vh',
    width: '100vw'
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContent;
