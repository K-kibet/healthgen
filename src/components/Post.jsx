import React from 'react';

const Post = ({post}) => {
    return (
    <div className="post">
        <div className="image-container">
            <img src={post.img} alt=""/>
        </div>
        <div className="content">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <div className="info">
                <div className="author">By: <span>kibet</span></div>
                <div className="date"><i className="fa fa-clock"></i> 12<sup>th</sup> May 2022</div>
            </div>
        </div>
    </div>
    );
}

export default Post;
