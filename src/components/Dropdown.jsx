import React from 'react';

const Dropdown = () => {
    return (
        <div className='dropdown'>
            <div className="top">
                <button><i className="fa fa-sun"></i> Light</button>
                <button><i className="fa fa-moon"></i> Dark</button>
            </div>
            <hr />
            <div className="wrapper">
                <a href="/">
                  <i className="fa fa-user"></i> <span>Profile</span>
                </a>
                <a href="/write">
                  <i className="fa fa-pen-nib"></i> <span>Write</span>
                </a>
                <a href="/">
                  <i className="fa fa-download"></i> <span>Downloads</span>
                </a>
                <a href="/">
                  <i className="fa fa-envelope"></i> <span>Inbox</span>
                </a>
                <a href="/">
                  <i className="fa fa-info"></i> <span>About</span> 
                </a>
                <a href="/">
                  <i className="fa fa-gear"></i> <span>Account Setting</span> 
                </a>
            </div>
            <button>Logout <i className="fa fa-power-off"></i></button>
        </div>
    );
}

export default Dropdown;
