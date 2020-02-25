import React, { useContext } from 'react';
import { ThemeContext } from '../../common/contexts/ThemeContext';
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
  const { isDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    props.selectCommit(props.sha);
  };

  const options = { year: '2-digit', month: '2-digit', day: '2-digit' };

  const backgroundStyles = () => {
    let backgroundColor;
    if (props.sha === props.selectedCard) {
      backgroundColor = isDarkMode ? '#212F3C' : '#fad7a0';
    } else {
      backgroundColor = isDarkMode ? '#5d6d7e' : '#f2f3f4';
    }
    return backgroundColor;
  };

  return (
    <div
      className={`CommitCard ${props.sha === props.selectedCard && 'CommitCard-active'}`}
      style={{ backgroundColor: backgroundStyles(), color: isDarkMode ? 'white' : 'black' }}
      onClick={handleClick}
    >
      <div className="CommitCard-message">{props.message}</div>
      <div className="CommitCard-user">
        <div>
          <Avatar icon={!props.img && 'user'} src={props.img && props.img} />
        </div>
        <div className="CommitCard-commit-info">
          <div className="CommitCard-commit-info-name">{props.name}</div>
          <div>{`committed on ${new Date(props.date).toLocaleDateString('de', options)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CommitCard;
