import React from 'react';
import Image from '../assets/img.jpeg'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="cover-photo">
                <img src={Image} alt="" className='profile-image'/>
            </div>
            <div className="profile-name"> Kibet Korir</div>
            <p className="about">
                User Interface Designer and <br /> fron-end developer
            </p>

            <div className="btn-container">
                <button className="msg-btn">Message</button>
                <button className="follow-btn">Follow</button>
            </div>

            <div className='social-links'>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-linkedin"></i>
            </div>
            
        </div>
    );
}

export default Profile;
