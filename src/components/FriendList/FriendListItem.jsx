import css from "./FriendList.module.css"

export default function FriendListItem({ friend }) {
      console.log('Friend Item:', friend);
  const { avatar, name, isOnline } = friend;
  const containerClsx = [css.inetType];
  isOnline ? containerClsx.push(css.isOnline) : containerClsx.push(css.isOffline); 
    return (
<>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.itemName}>{name}</p>
   <p className={containerClsx.join(' ')}>
        {isOnline ? "Online" : "Offline"}</p>
</>
    )
    
};