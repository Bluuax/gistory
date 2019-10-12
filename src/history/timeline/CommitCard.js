import React from 'react';
import { Avatar } from 'antd';
import './CommitCard.css';

/**
 * Renders a single CommitCard which displays the commit-message, name and image of the committer and the date of the commit.
 *
 * @param {string} props.sha - Unique id of the commit
 * @param {string} props.selectedCard - Sha of the currently selected commit
 * @param {string} props.img - Profile picture of the committer
 * @param {string} props.name - Username of the committer
 * @param {string} props.date - Date of the commit
 */
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
          {`committed on ${new Date(props.date).toLocaleDateString('de', options)}`}
        </div>
      </div>
    </div>
  );
}

export default CommitCard;
