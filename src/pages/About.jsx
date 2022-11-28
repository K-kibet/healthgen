import React from 'react';
import Icon from '../assets/logo.png';
import Testimonials from '../components/Testimonials';

const About = () => {
    return (
        <div className="about">
            <div className="profile">
                <img src={Icon} className='profile-image'/>
                <div className="info">
                    <h1>Healthgen.org</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente provident in porro asperiores tenetur assumenda possimus quisquam quae nisi obcaecati ea est enim vel, quo rerum nemo quidem ipsum?</p>
                    <ul>
                        <li><i className="fa fa-location"></i> san Francisco, USA</li>
                        <li><i className="fa fa-web"></i> mayraweb.com</li>
                        <li><i className="fa fa-instagram"></i> mariajb</li>
                    </ul>
                    <div className="links">
                        <a href="#">Download CV</a>
                        <a href="#">Send Message</a>
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    );
}

export default About;
