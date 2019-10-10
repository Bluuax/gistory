import React, { useContext } from 'react';
import { Context } from '../common/store';
import { Redirect } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './Stats.css';

function Stats() {
  const { store } = useContext(Context);

  // Workaround
  let displayLegend = true;
  window.innerWidth <= 375 && (displayLegend = false);

  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="Stats">
          <h1 className="Stats-title">Commits</h1>
          <div className="Stats-chart">
            <Doughnut
              data={store.chartData}
              options={{
                legend: {
                  display: displayLegend,
                  position: 'bottom',
                  labels: { padding: 20 }
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Stats;
