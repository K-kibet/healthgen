import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <section>
                    <h3>Home</h3>
                    <div className="container">
                        <a href="/" className='link'>Get News</a>
                        <a href="/" className='link'>Privacy at Healthgen</a>
                        <a href="/" className='link'>Download Center</a>
                        <a href="/" className='link'>Account Profile</a>
                        <a href="/" className='link'>Healthcare</a>
                    </div>
                </section>

                <section>
                    <h3>Useful Links</h3>
                    <div className="container">
                        <a href="/" className='link'>Support</a>
                        <a href="/" className='link'>Write a post</a>
                        <a href="/" className='link'>Get News</a>
                        <a href="/" className='link'>Give Feedback</a>
                        <a href="/" className='link'>Terms of use</a>
                    </div>
                </section>

                <section>
                    <h3>Healthgen</h3>
                    <div className="container">
                        <a href="/" className='link'>Home</a>
                        <a href="/books" className='link'>Books</a>
                        <a href="/posts" className='link'>Read Blogs</a>
                        <a href="/about" className='link'>About Healthgen</a>
                        <a href="/contact" className='link'>Contact Us</a>
                    </div>
                </section>

            </div>
            <div className="bottom">
                <span>&copy; healthgen 2022</span>
                <div className="container">
                    <span>Follow us:</span>
                    <a href="https://facebook.com" className='facebook' target='_blank' title='https://facebook.com'><i className="fa fa-facebook"></i></a>
                    <a href="https://facebook.com" className='twitter' target='_blank' title='https://facebook.com'><i className="fa fa-twitter"></i></a>
                    <a href="https://facebook.com" className='instagram' target='_blank' title='https://facebook.com'><i className="fa fa-instagram"></i></a>
                    <a href="https://facebook.com" className='youtube' target='_blank' title='https://facebook.com'><i className="fa fa-youtube"></i></a>
                    <a href="https://facebook.com" className='linkedin' target='_blank' title='https://facebook.com'><i className="fa fa-linkedin"></i></a>
                </div>
                <a href="/about">FAQ</a>
                <a href="/about">Privacy & Cookies</a>
            </div>
        </div>
    );
}

export default Footer;
