import React, { Component } from 'react';
import CommitBox from './CommitBox';

export class Timeline extends Component {
  static defaultProps = {
    displayAmount: 6
  };

  render() {
    let commitBoxes = [];
    for (let i = 0; i < this.props.id.length; i++) {
      commitBoxes.push(<CommitBox key={this.props.id[i]} />);
    }

    /* TODO: Click at first or last Item --> Display new row */
    return <div>{commitBoxes.slice(0, this.props.displayAmount)}</div>;
  }
}

export default Timeline;
