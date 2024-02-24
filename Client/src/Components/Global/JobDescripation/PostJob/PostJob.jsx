import React from 'react';
import { Link } from 'react-router-dom';
import "./PostJob.css"

function PostJob({ postedDate, location, vacancy, jobNature, salary, applicationDate, applyLink, btn1 = "Apply Now",EmployerShow }) {
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
      {EmployerShow?'':(
          <Link to={applyLink} ><button className="button-apply-now ">
          {btn1}
        </button></Link>
      )}

      </div>
    </div>
  );
}

export default PostJob;
