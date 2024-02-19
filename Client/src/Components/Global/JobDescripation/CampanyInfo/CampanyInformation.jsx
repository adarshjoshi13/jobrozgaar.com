import React from 'react';
import { Link } from 'react-router-dom';
import "./CampanyInformation.css"
function CompanyInformation({ name, website, email,para ,name1 }) {
  return (
    <div className="post-details4 mb-50">
      <div className="small-section-tittle">
        <h4>{name}</h4>
      </div>
     
      <p>{para}</p>
      <ul>
        <li>Name: <span>{name1}</span></li>
        <li>Web  : <span>{website}</span></li>
        <li>Email: <span><Link to="#" className="">{email}</Link></span></li>
      </ul>
    </div>
  );
}

export default CompanyInformation;