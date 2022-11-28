import React from 'react';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="wrapper">
                <Profile />
            </div>
        </div>
    );
}

export default Dashboard;
