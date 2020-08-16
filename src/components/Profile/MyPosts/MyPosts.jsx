import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="textar" id="" cols="40" rows="4"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' value={'18'} />
                <Post message="It's my first post" value={'15'}/>
            </div>
        </div>
    )
}

export default MyPosts;