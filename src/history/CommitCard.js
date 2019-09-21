import React, { Component } from 'react';
import { humanReadableTime } from '../common/helpers.js';
import './CommitCard.css';

export class CommitCard extends Component {
  handleClick = () => {
    this.props.selectCommit(this.props.sha);
  };

  getTime() {
    const date = new Date(this.props.date);
    return humanReadableTime(date);
  }

  render() {
    return (
      <div className="CommitCard" onClick={this.handleClick}>
        <img src={this.props.img} alt="avatar" />
        {this.props.name}
        <p>{this.getTime()}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default CommitCard;
