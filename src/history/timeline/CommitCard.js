import React from 'react';
import { Avatar } from 'antd';
import './CommitCard.css';

function CommitCard(props) {
  const handleClick = () => {
    props.selectCommit(props.sha);
  };

  const options = { year: '2-digit', month: '2-digit', day: '2-digit' };

  return (
    <div className={`CommitCard ${props.sha === props.selectedCard && 'CommitCard-active'}`} onClick={handleClick}>
      <div className="CommitCard-message">{props.message}</div>
      <div className="CommitCard-user">
        <div>
          <Avatar icon={!props.img && 'user'} src={props.img && props.img} />
        </div>
        <div className="CommitCard-commit-info">
          {`${props.name}`}
          <br />
          {`committed on ${new Date(props.date).toLocaleDateString('de-DE', options)}`}
        </div>
      </div>
    </div>
  );
}

export default CommitCard;
