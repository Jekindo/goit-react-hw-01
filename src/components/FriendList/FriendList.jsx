import FriendListITem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListITem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
