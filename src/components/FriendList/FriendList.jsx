import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
  return ( <>
      <ul className={css.cardList}>
            {friends.map(friend => (
                <li className={css.cardItem} key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    </>
)};