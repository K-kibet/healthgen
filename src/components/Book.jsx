import React from 'react';
import Image from '../assets/img.jpeg';

const Book = () => {
    return (
    <div className="book">
        <div className="image-container">
            <img src={Image} alt="" />
        </div>
        <h2>Lorem ipsum dolo sit amet</h2>
        <button>DOWNLOAD</button>
    </div>
    );
}

export default Book;
