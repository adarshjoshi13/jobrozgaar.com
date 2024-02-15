import React from 'react';
import './EmployerTabs.css';

function EmployerTabs() {
    return (
        <div className="employerTabs mb-3">
            <div className="tabItem">
                <img src="/Utility/job-detail.png" alt="" />
            </div>
            <div className="tabItem">
                <img src="/Utility/req.png" alt="" />
            </div>
            <div className="tabItem">
                <img className='bige' src="/Utility/company.png" alt="" />
            </div>
            <div className="tabItem">
                <img className='bige' src="/Utility/plan.png" alt="" />
            </div>
        </div>
    );
}

export default EmployerTabs;
