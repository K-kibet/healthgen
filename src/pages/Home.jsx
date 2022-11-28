import React from 'react'
import Flyer from '../components/Flyer'
import Post from '../components/Post'
import Slider from '../components/Slider'
import {posts} from '../data'

export default function Home() {
  return (
    <div className='home'>
      <Slider />
      <div className="popular-posts">
        <h2>Popular Posts</h2>
        <div className="wrapper">
                {
                    posts.map(post => {
                        return <Post key={post.id} post={post}/>
                    })
                }
        </div>
      </div>
      <Flyer />
    </div>
  )
}
