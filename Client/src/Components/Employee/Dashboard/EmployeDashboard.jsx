import React, { useState } from 'react';
import "./EmployeDashboard.css";
import { Link } from 'react-router-dom';
import Buttons from '../Global/Buttons/Buttons';

import ProfileCard from '../Global/ProfileCard/ProfileCard';
import EmployeNav from '../Global/EmployeNav/EmployeNav';

function EmployeDash_Board() {



    return (
        <div className='home-dash'>
            <EmployeNav />

            <ProfileCard />

            <div className="container flex-wrap button-home-dash d-flex justify-content-center align-items-center ">
                <Buttons to='/my-jobs' color={"#3C6271"} title={"My Jobs"} />
                <Buttons to='/personal-profile' color={"#87b724"} title={"Personal Profile"} />
                <Buttons to='/work-experience' color={"#3C6271"} title={"Work Experince"} />
                <Buttons to='/education' color={"#87b724"} title={"Education"} />
                <Buttons to='/offer-letter' color={"#3C6271"} title={"Offer Letter"} />
                <Buttons to='setting' color={"#87b724"} title={"Setting"} />
                <Buttons to='tips-support' color={"#3C6271"} title={"Tips & Support"} />
            </div>
        </div>
    );
}

export default EmployeDash_Board;
