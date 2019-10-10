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

function randomColor() {
  const rand = () => Math.floor(Math.random() * 255);
  return `rgba(${rand()}, ${rand()}, ${rand()}, 0.6)`;
}

export { genericColor, randomColor };
