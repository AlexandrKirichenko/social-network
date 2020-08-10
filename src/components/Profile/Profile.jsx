import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src='https://thumbs.gfycat.com/AchingSilkyFoal-size_restricted.gif' alt='Plexusimage'></img>
      </div>
      <div>
        ava + description
    </div>
    <MyPosts />
    </div>
  )
}

export default Profile;