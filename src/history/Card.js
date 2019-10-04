import React from 'react';
import { humanReadableDateTime } from '../common/helpers';
import './Card.css';

function Card(props) {
  return (
    <div className="Card" style={{ backgroundColor: props.color }}>
      <div className="Card-title">{props.title}</div>

      {/* TODO */}
      {props.title === 'Info' && (
        <div className="Card-content">
          <p>File Name: {props.data.name}</p>
          <p>Commit Message: {props.data.commit.message}</p>
          <p>Commit Date/Time: {humanReadableDateTime(new Date(props.data.commit.author.date))}</p>
          <p>
            Author:{' '}
            <a href={props.data.author.html_url} target="_blank" rel="noopener noreferrer">
              {props.data.commit.author.name}
            </a>
          </p>{' '}
          {/* Link zu GitHub User */}
        </div>
      )}
    </div>
  );
}

export default Card;
