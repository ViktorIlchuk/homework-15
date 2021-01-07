import React from 'react';
import approvalIcon from '../img/approvalIcon.png'
import './Post.css';

function Post(props) {
    return (
        <div className='Post'>            
            <img src={props.author.photo} className='avatar' alt='avatar' />
            <div className='postInfo'>
                <div className='authorInfo'>
                    <p className='authorName'>{props.author.name}</p>
                    <img className='active' src={approvalIcon}  alt='approval' />
                    <p className='nickName'>{props.author.nickname}</p>                   
                    <p className='postDate'>{props.date}</p>
                </div>
                <p className='postText'>{props.content}</p>
                <img className='postImage' src={props.image} alt='postImage' />
            </div>
        </div>
    )
}

export default Post;