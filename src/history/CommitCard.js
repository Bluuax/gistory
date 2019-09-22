import React, { Component } from 'react';
import { humanReadableDate } from '../common/helpers.js';
import './CommitCard.css';

export class CommitCard extends Component {
  handleClick = () => {
    this.props.selectCommit(this.props.sha);
  };

  gethumanReadableDate() {
    const date = new Date(this.props.date);
    return humanReadableDate(date);
  }

  render() {
    return (
      <div
        className={`CommitCard ${this.props.sha === this.props.selectedCard && 'CommitCard-active'}`}
        onClick={this.handleClick}
      >
        <div>{this.props.message}</div>
        <div className="CommitCard-user">
          <img src={this.props.img} alt="avatar" />
          {this.props.name}
          <br />
          committed on {` ${this.gethumanReadableDate()}`}
        </div>
      </div>
    );
  }
}

export default CommitCard;
