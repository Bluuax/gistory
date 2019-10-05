import React from 'react';
import { formattedDateTime } from '../common/helpers';
import './Card.css';

function Card(props) {
  return (
    <div className="Card" style={{ backgroundColor: props.color }}>
      <h2 className="Card-title">{props.title}</h2>

      {/* TODO: Null überprüfungen */}
      {props.title === 'Info' && (
        <div className="Card-content">
          <div className="Card-content-section">
            <span className="Card-description">File: </span>
            <span>{props.data.name}</span>
          </div>
          <div className="Card-content-section">
            <span className="Card-description">Message: </span>
            <span>{props.data.commit.message}</span>
          </div>
          <div className="Card-content-section">
            <span className="Card-description">Timestamp: </span>
            <span> {formattedDateTime(new Date(props.data.commit.author.date))}</span>
          </div>
          <div>
            <span className="Card-description">Author: </span>
            <a href={props.data.author && props.data.author.html_url} target="_blank" rel="noopener noreferrer">
              {props.data.commit.author.name}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
