import PropTypes from 'prop-types';
import { Online, Offline, Avatar, Name, Item } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      {isOnline ? <Online></Online> : <Offline></Offline>}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
