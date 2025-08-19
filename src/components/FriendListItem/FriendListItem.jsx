import style from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div className={style.friendCard}>
      <img src={friend.avatar} alt="Avatar" />
      <p className={style.name}>{friend.name}</p>
      <p
        className={`${style.same} ${friend.isOnline ? style.online : style.offline}`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;