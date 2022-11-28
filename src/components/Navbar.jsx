import React, { useState } from 'react';
import Icon from '../assets/logo.png';

const Navbar = () => {
    const [user, setUser] = useState(null)
    return (
        <div className='navbar'>
            <a href="/" className="logo">
                <img src={Icon} alt="healthgen icon" />
            </a>
            <nav>
                <a href="/" className='active' title='home'>Home</a>
                <a href="/books" title='books'>Books</a>
                <a href="/posts" title='posts'>Posts</a>
                <a href="/write" title='write'>Write</a>
                <a href="/about" title='about'>About</a>
                <a href="/contact" title='contact'>Contact</a>
            </nav>
            {   user && 
                <div className="user-avatar">
                    <img src={Icon} alt="user-avatar" />
                    <i class="fa fa-user"></i>
                </div>
            }
            {
                !user &&
                <div className="button-group">
                  <a href='/register' title='register'>Register</a>
                  <a href='/login' title='login'>Login</a>
                </div>
            }
            

        </div>
    );
}

export default Navbar;
