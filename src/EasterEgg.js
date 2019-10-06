import React, { useState } from 'react';
import Konami from 'react-konami-code';
import Confetti from 'react-confetti';

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
