import React, { useContext } from 'react';
import { Context } from '../common/store';
import { ThemeContext } from '../common/contexts/ThemeContext';
import { Redirect } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import './Stats.css';

/**
 * Renders a doughnut chart that contains informations about all committers and their respective amout of commits.
 * The data for the chart is provided through the global store.
 */
function Stats() {
  const { store } = useContext(Context);
  const { isDarkMode } = useContext(ThemeContext);

  // Workaround for Chart.js
  const displayLegend = 375 < window.innerWidth ? true : false;

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
                  labels: { padding: 20, fontColor: isDarkMode ? '#D0D3D4' : '#666' }
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
