import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Card;
