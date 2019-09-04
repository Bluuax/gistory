import React, { Component } from 'react';
import './CommitBox.css';

export class CommitBox extends Component {
  handleClick = () => {
    console.log('TEST');
  };

  render() {
    return <div className="CommitBox" onClick={this.handleClick}></div>;
  }
}

export default CommitBox;
