import React, { Component } from 'react';
import CommitCard from './CommitCard';
import './Timeline.css';

export class Timeline extends Component {
  static defaultProps = {
    displayAmount: 6
  };

  render() {
    const commitCards = this.props.versions.map(version => (
      <CommitCard
        key={version.sha}
        sha={version.sha}
        img={version.author.avatar_url}
        name={version.commit.author.name}
        date={version.commit.author.date}
        message={version.commit.message}
        selectedCard={this.props.selectedCard}
        selectCommit={this.props.selectCommit}
      />
    ));

    return (
      <div className="Timeline">
        <div className="Timeline-cards">{commitCards}</div>
      </div>
    );
  }
}

export default Timeline;
