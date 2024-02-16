import React from 'react';
import './EmployerTabs.css';
import { Link } from 'react-router-dom';

function EmployerTabs() {
    return (
        <div className="employerTabs mb-3">
            <div className="tabItem">
                <img src="/Utility/job-detail.png" alt="" />
            </div>
            <div className="tabItem">
               
                <Link to={'/employer-starter-Dashboard/view-candidates'}> <img src="/Utility/req.png" alt="" /></Link>
            </div>
            <div className="tabItem">
                <Link to={'/employer-starter-Dashboard/view-company-details'}><img className='bige' src="/Utility/company.png" alt="" /></Link>
            </div>
            <div className="tabItem">
                <Link to={'/employer-starter-Dashboard/view-plans'}> <img className='bige' src="/Utility/plan.png" alt="" /></Link>
                
            </div>
        </div>
    );
}

export default EmployerTabs;
