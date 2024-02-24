import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCog, FaQuestion, FaSignOutAlt } from 'react-icons/fa'; // Import icons from React Icons
import './ProfileIcon.css'; // Import your CSS file here

const ProfileIcon = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleMouseEnter = () => {
        setMenuActive(true);
    };

    const handleMouseLeave = () => {
        setMenuActive(false);
    };

    return (
        <div className="pro-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="profile">
                <div className="img-box">
                    <img src="/Utility/no1.gif" alt="some user image" />
                </div>
            </div>
            <div className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="#"><FaUser />&nbsp;Profile</a></li>
                    <li><a href="#"><FaEnvelope />&nbsp;Inbox</a></li>
                    <li><a href="#"><FaCog />&nbsp;Settings</a></li>
                    <li><a href="#"><FaQuestion />&nbsp;Help</a></li>
                    <li><a href="#"><FaSignOutAlt />&nbsp;Sign Out</a></li>
                </ul>
            </div>
        </div>
    );
};  

export default ProfileIcon;
