import PropTypes from 'prop-types';
import {
  Name,
  Container,
  Desrp,
  Avatar,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
  Item,
} from './SocialProfile.styled';

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <Container>
      <Desrp>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Desrp>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
