import React, { useContext } from 'react';
import { Context } from '../common/store';
import { ThemeContext } from '../common/contexts/ThemeContext';
import { Redirect } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './Stats.css';

/**
 * Renders a doughnut chart that contains informations about all committers and their respective amout of commits.
 */
function Stats() {
  const { store } = useContext(Context);
  const { isDarkMode } = useContext(ThemeContext);

  // Workaround for Chart.js
  let displayLegend = true;
  window.innerWidth <= 375 && (displayLegend = false);

  return (
    <>
      {store.url === '' ? (
        <Redirect to="/" />
      ) : (
        <div className="Stats">
          <h1 className="Stats-title" style={{ color: isDarkMode ? 'white' : 'black' }}>
            Commits
          </h1>
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
