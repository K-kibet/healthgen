import React from 'react';

import Image from '../assets/img.jpeg'
import Post from '../components/Post';

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className='item'>
                <div className="wrapper">
                    <img src={Image} alt="" />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, fuga quas harum incidunt id dolor itaque molestias officiis possimus amet hic voluptatem labore, debitis pariatur officia numquam at ea nemo.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, dolorum illum, voluptatum reiciendis rem magni blanditiis obcaecati voluptates est veniam aut vero illo officia maiores quod! Aliquid odit doloribus dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deserunt perspiciatis sit soluta sunt atque rem, nostrum officia distinctio ipsam, ipsum nulla! Perferendis id, quo exercitationem delectus rerum culpa provident!
                    </p>
                </div>
                <aside>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum inventore eaque aperiam optio facilis culpa pariatur reiciendis. Voluptatibus tenetur sed rerum praesentium doloremque quas ex, ad qui omnis iste.</aside>
            </div>
            <div className="similar-blogs">
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    );
}

export default SinglePost; 
