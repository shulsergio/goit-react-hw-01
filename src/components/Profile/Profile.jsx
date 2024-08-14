import css from './Profile.module.css';
export default function Profile({name,tag,location,image,stats}) {
    return (
        <div className={css.profileCard}>
    <div className={css.profilePartCard}>
    <img className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.profileCardName}>{name} </p>
    <p className={css.profileCardTag}>@{tag}</p>
    <p className={css.profileCardLctn}>{location}</p>
  </div>

  <ul className={css.profileCardList}>
                <li className={css.profileCardItem}>
      <span>Followers</span>
      <span className={css.profileCardSpan}>{stats.followers}</span>
    </li>
    <li className={css.profileCardItem}>
      <span>Views</span>
      <span className={css.profileCardSpan}>{stats.views}</span>
    </li>
    <li className={css.profileCardItem}>
      <span>Likes</span>
      <span className={css.profileCardSpan}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}