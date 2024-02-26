import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PostJob.css"
import { PopUpCard } from '../../../../Pages/export';

function PostJob({ postedDate, location, vacancy, jobNature, salary, applicationDate, applyLink, btn1, EmployerShow }) {
  const [popup,setPopup] = useState(false);

 function handleChange () {
  setPopup(!popup)
 }
  return (
    <div className="post-details3 mb-50">
      <div className="small-section-tittle">
        <h4>Job Overview</h4>
      </div>
      <ul>
        <li>Posted date : <span>{postedDate}</span></li>
        <li>Location : <span>{location}</span></li>
        <li>Vacancy : <span>{vacancy}</span></li>
        <li>Job nature : <span>{jobNature}</span></li>
        <li>Salary : <span>{salary}</span></li>
        <li>Application date : <span>{applicationDate}</span></li>
      </ul>
      <div className="apply-btn2">
        {EmployerShow ? '' : (
          <Link to={applyLink} ><button onClick={handleChange} className="button-apply-now ">
            {btn1}
          </button></Link>
        )}
        

      </div>
    {
     popup ?  (<PopUpCard title={"Are you really want to Delete !"} Para={"if delete this its means there no way are gonna back this commond sir so please think and do."} url={"/Utility/del.gif"} btn1={"Delete Now"}  onClose={handleChange}/>) : null 
    } 
    </div>
  );
}

export default PostJob;
