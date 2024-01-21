import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./CampanyBox.css";

function CampanyBox({ jobTitle, companyType, location, salary, imageSrc, linkTo }) {
  return (
    <div className="single-job-items mb-50">
      <div className="job-items">
        <div className="company-img company-img-details">
          <Link to={linkTo}><img src={imageSrc} alt="" /></Link>
        </div>
        <div className="job-tittle">
          <Link to={linkTo}>
            <h4>{jobTitle}</h4>
          </Link>
          <ul>
            <li>{companyType}</li>
            <li><FaMapMarkerAlt /> {location}</li>
            <li>{salary}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CampanyBox;
