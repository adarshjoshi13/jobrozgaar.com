import React from 'react';
import './EmployerTabs.css';
import { Link } from 'react-router-dom';

function EmployerTabs() {
    return (
        <div className="employerTabs mb-3">
            <Link to={'/employer-starter-Dashboard/view-job'}>
                <div className="tabItem">
                    <img src="/Utility/job-detail.png" alt="" />
                </div>
            </Link>
            <Link to={'/employer-starter-Dashboard/view-candidates'}>
                <div className="tabItem">
                    <img src="/Utility/req.png" alt="" />
                </div>
            </Link>
            <Link to={'/employer-starter-Dashboard/view-company-details'}>
                <div className="tabItem">
                    <img className='bige' src="/Utility/company.png" alt="" />
                </div>
            </Link>
            <Link to={'/employer-starter-Dashboard/view-plans'}>
                <div className="tabItem">
                    <img className='big-g' src="/Utility/plan.png" alt="" />
                </div>
            </Link>
        </div>
    );
}

export default EmployerTabs;
