import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={style.friendList}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
    </div>
  );
};

export default FriendList;