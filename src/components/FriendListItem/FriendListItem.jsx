import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img src={avatar} alt={name} width="48" />
      <p className={s.title}>{name}</p>
      <p className={clsx(s.status, isOnline ? s.isOnline : s.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
