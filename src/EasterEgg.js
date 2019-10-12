import React, { useState } from 'react';
import Konami from 'react-konami-code';
import Confetti from 'react-confetti';

/**
 * An easter egg which triggers if the user inserts the Konami Code (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
 * and renders an infinite amount of confetti.
 */
function EasterEgg() {
  const [easterEgg, setEasterEgg] = useState(false);

  const easterEggToggle = () => {
    setEasterEgg(true);
  };

  return (
    <div>
      <Konami action={easterEggToggle} />
      {easterEgg && <Confetti />}
    </div>
  );
}

export default EasterEgg;
