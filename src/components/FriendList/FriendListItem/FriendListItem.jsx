import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friendItem }) => {
  return (
    <li className={css.item}>
      {friendItem.isOnline ? (
        <span className={css.statusOnline}>{friendItem.isOnline}</span>
      ) : (
        <span className={css.statusOffline}>{friendItem.isOnline}</span>
      )}

      <img className={css.avatar} src={friendItem.avatar} alt="User avatar" />
      <p className={css.name}>{friendItem.name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friendItem: PropTypes.bool.isRequired,
};

export default FriendListItem;