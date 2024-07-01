import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={s.profileCard}>
      <div className={s.info}>
        <img className={s.image} src={image} alt={name} />
        <p className={s.username}>{name}</p>
        <p className={s.tags}>@{tag}</p>
        <p className={s.tags}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.statsLabel}>Followers</span>
          <span className={s.statsValue}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsLabel}>Views</span>
          <span className={s.statsValue}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsLabel}>Likes</span>
          <span className={s.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
