import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.profileBox}>
        <img src={image} alt="User avatar" />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.info}>{location}</p>
      </div>
      <div>
        <ul  className={style.stats}>
          <li>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
