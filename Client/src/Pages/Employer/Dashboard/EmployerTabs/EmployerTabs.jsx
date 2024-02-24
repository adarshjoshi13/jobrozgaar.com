import React from 'react';
import './EmployerTabs.css';
import { Link } from 'react-router-dom';
import EmployerTab from './EmployerTab/EmployerTab';


function EmployerTabs() {
    return (
        <div className="employerTabs mb-3">
        <EmployerTab url={"/Utility/job-detail.png"} links={'/employer-starter-Dashboard/view-job'}/>
        <EmployerTab links={'/employer-starter-Dashboard/view-candidates'} url={"/Utility/req.png"}/>
        <EmployerTab cls={"bige"} links={'/employer-starter-Dashboard/view-company-details'} url={"/Utility/company.png"}/>
        <EmployerTab cls={"big-g"} url={"/Utility/plan.png"} links={'/employer-starter-Dashboard/view-plans'}/>
         
           
            {/* <Link to={'/employer-starter-Dashboard/view-company-details'}>
                <div className="tabItem">
                    <img className='bige' src="/Utility/company.png" alt="" />
                </div>
            </Link> */}
            {/* <Link to={'/employer-starter-Dashboard/view-plans'}>
                <div className="tabItem">
                    <img className='big-g' src="/Utility/plan.png" alt="" />
                </div>
            </Link> */}
        </div>
    );
}

export default EmployerTabs;
