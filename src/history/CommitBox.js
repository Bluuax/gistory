import React, { Component } from 'react';
import './CommitBox.css';

export class CommitBox extends Component {
  handleClick = () => {
    this.props.selectCommit(this.props.sha);
  };

  getTime() {
    const date = new Date(this.props.date);
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  }

  render() {
    return (
      <div className="CommitBox" onClick={this.handleClick}>
        <img src={this.props.img} alt="avatar" />
        {this.props.name}
        <p>{this.getTime()}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default CommitBox;
