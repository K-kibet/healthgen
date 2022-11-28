import React from 'react';
import Book from '../components/Book';

const Books = () => {
    return (
        <div className='books'>
            <h2>Download E-book Of Your Choice</h2>
            <div className="wrapper">
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    );
}

export default Books;
