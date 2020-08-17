import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2ReBjEXmCMQrGdct1ZF3FtkEDvFGNkQlFWg&usqp=CAU"
                alt="avatar"/>
            { props.message }

            <div>
                <span>Like  { props.likes }</span>

            </div>
        </div>
    )
}

export default Post;