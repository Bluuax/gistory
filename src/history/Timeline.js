import React, { Component } from 'react';
import CommitBox from './CommitBox';

export class Timeline extends Component {
  render() {
    let commitBoxes = [];
    for (let i = 0; i < this.props.boxesAmount; i++) {
      commitBoxes.push(<CommitBox />);
    }

    return <div>{commitBoxes}</div>;
  }
}

export default Timeline;
