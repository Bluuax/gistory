import React, { Component } from 'react';
import CommitBox from './CommitBox';

export class Timeline extends Component {
  static defaultProps = {
    displayAmount: 6
  };

  render() {
    const commitBoxes = this.props.versions.map(version => (
      <CommitBox
        key={version.sha}
        sha={version.sha}
        img={version.author.avatar_url}
        name={version.commit.author.name}
        date={version.commit.author.date}
        message={version.commit.message}
        selectCommit={this.props.selectCommit}
      />
    ));

    /* TODO: Click at first or last Item --> Display new row */
    return <div>{commitBoxes.slice(0, this.props.displayAmount)}</div>;
  }
}

export default Timeline;
