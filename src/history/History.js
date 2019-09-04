import React, { Component } from 'react';
import Timeline from './Timeline';
import Code from './Code';
import Card from './Card';
import './History.css';


export class History extends Component {
  // TODO: Maybe no default props needed
  static defaultProps = {
    gitHubURL: ''
  };

  render() {
    return (
      <div className="History-container">
        <div className="History-timeline">
          <Timeline boxesAmount={7}/>
        </div>
        <div className="History-code">
          <Code />
        </div>
        <div className="History-changes-card">
          <Card title="Changes" color="#f5cba7" /> {/* TODO: Modaler Dialog - See all changes */}
        </div>
        <div className="History-info-card">
          <Card title="Info" color="#BB8FCE" />
        </div>
      </div>
    );
  }
}

export default History;
