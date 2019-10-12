import React, { Component } from 'react';
import CommitCard from './CommitCard';
import './Timeline.css';

/**
 * Renders the whole Timeline with n CommitCards.
 */
function Timeline(props) {
  const commitCards = props.versions.map(version => (
    <CommitCard
      key={version.sha}
      sha={version.sha}
      img={version.author && version.author.avatar_url ? version.author.avatar_url : undefined}
      name={version.commit.author.name}
      date={version.commit.author.date}
      message={version.commit.message}
      selectedCard={props.selectedCard}
      selectCommit={props.selectCommit}
    />
  ));

  return (
    <div className="Timeline">
      <div className="Timeline-cards">{commitCards}</div>
    </div>
  );
}

export default Timeline;
