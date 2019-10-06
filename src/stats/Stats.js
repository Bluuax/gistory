import React, { useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './Stats.css';

function Stats() {
  const { store } = useContext(Context);

  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="Stats">
          <h1>Commits</h1>
          <Doughnut
            data={store.chartData}
            options={{
              legend: {
                display: true,
                position: 'bottom',
                labels: { padding: 20 }
              }
            }}
          />
        </div>
      )}
    </>
  );
}

export default Stats;
