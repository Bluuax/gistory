function formattedDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

function formattedDateTime(dateTime) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(dateTime);
}

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
  return `${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 0.6`;
}

export { formattedDate, formattedDateTime, genericColor, randomColor };
