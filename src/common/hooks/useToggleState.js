import { useState } from 'react';

/**
 * A hook for setting a global toggle which is used for the theme selection.
 *
 * @param {boolean} initialVal - React props
 */
function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
