import React, { Component } from 'react';
import { formattedDate } from '../../common/helpers.js';
import { Avatar } from 'antd';
import './CommitCard.css';

export class CommitCard extends Component {
  handleClick = () => {
    this.props.selectCommit(this.props.sha);
  };

  render() {
    return (
      <div
        className={`CommitCard ${this.props.sha === this.props.selectedCard && 'CommitCard-active'}`}
        onClick={this.handleClick}
      >
        <div className="CommitCard-message">{this.props.message}</div>
        <div className="CommitCard-user">
          <div>
            <Avatar icon={!this.props.img && 'user'} src={this.props.img && this.props.img} />
          </div>
          <div className="CommitCard-commit-info">
            {`${this.props.name}`}
            <br />
            {`committed on ${formattedDate(new Date(this.props.date))}`}
          </div>
        </div>
      </div>
    );
  }
}

export default CommitCard;
