import React from 'react';
import Post from '../components/Post';
import {posts} from '../data';

const Posts = () => {
    return (
        <div className='posts'>
            <div className="tags">
                <a href="/" className="tag" title='healcare'>health</a>
                <a href="/" className="tag" title='healcare'>health</a>
                <a href="/" className="tag" title='healcare'>health</a>
                <a href="/" className="tag" title='healcare'>health</a>
                <a href="/" className="tag" title='healcare'>health</a>
            </div>
            <div className="wrapper">
                {
                    posts.map(post => {
                        return <Post key={post.id} post={post}/>
                    })
                }
            </div>                

            
        </div>
    );
}

export default Posts;
