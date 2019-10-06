import React, { useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './Stats.css';

function Stats() {
  const { store } = useContext(Context);

  // TODO: 10 Farben vorgeben, rest generieren lassen
  const randomColor = () => {
    return `${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)}, 0.6`;
  };

  // Workaround
  let position = 'right';
  window.innerWidth <= 375 && (position = 'bottom');

  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="Stats">
          <h1>Commits</h1>
          <Doughnut
            data={{
              labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
              datasets: [
                {
                  label: 'Commits',
                  data: [10, 20, 5, 23, 90, 2],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    `rgba(${randomColor()})`
                  ]
                }
              ]
            }}
            options={{
              legend: {
                display: true,
                position: position
              }
            }}
          />
        </div>
      )}
    </>
  );
}

export default Stats;
