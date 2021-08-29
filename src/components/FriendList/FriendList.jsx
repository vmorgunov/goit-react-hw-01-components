import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact),
};
