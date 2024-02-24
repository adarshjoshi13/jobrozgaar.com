import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCog, FaQuestion, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa'; // Import icons from React Icons
import './ProfileIcon.css'; 
import { Link } from 'react-router-dom';

const ProfileIcon = ({dashboard,setting}) => {
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
                    <FaUser/>
                </div>
            </div>
            <div className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                <li><Link to={dashboard}><FaTachometerAlt />&nbsp;Dashboard</Link></li>
            <li><Link to={'#'}><FaEnvelope />&nbsp;Inbox</Link></li>
            <li><Link to={setting}><FaCog />&nbsp;Settings</Link></li>
            <li><Link to={"#"}><FaQuestion />&nbsp;Help</Link></li>
                </ul>
            </div>
        </div>
    );
};  

export default ProfileIcon;
