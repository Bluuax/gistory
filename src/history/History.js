import React, { Component } from 'react';
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
        <div className="History-code">
          <Code />
        </div>
        <div className="History-cards">
          <Card title="Changes" color="blue" />
          {/* TODO: Modaler Dialog - See all changes */}
          <Card className="History-info-card" title="Info" />
        </div>
      </div>
    );
  }
}

export default History;
