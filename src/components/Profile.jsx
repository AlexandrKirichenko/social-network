import React from 'react';
import s from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src='https://thumbs.gfycat.com/AchingSilkyFoal-size_restricted.gif' alt='Plexusimage'></img>
      </div>
      <div>
        ava + description
    </div>
      <div>
        My posts
      <div>
          New posts
      </div>
        <div className={s.posts}>
          <div className={s.item}>Post1</div>
          <div className={s.item}>Post2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;