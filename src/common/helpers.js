/**
 * Return an array with 7 predefined colors in the rgba format.
 *
 * @returns {string|Array}
 */
function genericColor() {
  return [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ];
}

/**
 * Generates a random color in the rgba format with an alpha value of 0.6.
 *
 * @returns {string} Example: "rgba(100, 50, 200, 0.6)"
 */
function randomColor() {
  const rand = () => Math.floor(Math.random() * 255);
  return `rgba(${rand()}, ${rand()}, ${rand()}, 0.6)`;
}

export { genericColor, randomColor };
