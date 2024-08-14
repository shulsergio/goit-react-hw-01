import css from "./FriendList.module.css"

export default function FriendListItem({ friend }) {
      console.log('Friend Item:', friend);
    const { avatar, name, isOnline } = friend;
    return (
<>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.itemName}>{name}</p>
   <p className={`${css.inetType} ${isOnline ? css.isOnline : css.isOffline}`}>
        {isOnline ? "Online" : "Offline"}</p>
</>
    )
    
};