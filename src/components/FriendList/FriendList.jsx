import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from 'clsx'
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.list)}>
      {friends.map(friend => 
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
      )}
    </ul>
  );
}

export default FriendList;
