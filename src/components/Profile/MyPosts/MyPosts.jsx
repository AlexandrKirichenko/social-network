import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
      <div>
        My posts
      <div>
          New posts
      </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post1
          </div>
          <div className={s.item}>
            Post2
          </div>
        </div>
      </div>
)
}

export default MyPosts;