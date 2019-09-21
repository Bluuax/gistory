import React, { Component } from 'react';
import { humanReadableTime } from '../common/helpers.js';
import './CommitCard.css';

export class CommitCard extends Component {
  handleClick = () => {
    this.props.selectCommit(this.props.sha);
  };

  getHumanReadableTime() {
    const date = new Date(this.props.date);
    return humanReadableTime(date);
  }

  render() {
    return (
      <div className="CommitCard" onClick={this.handleClick}>
        <div>{this.props.message}</div>
        <div className="CommitCard-user">
          <img src={this.props.img} alt="avatar" />
          {this.props.name}
          <br />
          committed on {this.props.name}
          {/* {this.getHumanReadableTime()} */}
          {/* {this.getHumanReadableTime()} */}
        </div>
      </div>
    );
  }
}

export default CommitCard;
