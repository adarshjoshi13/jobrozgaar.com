import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa';
import "./CampanyBox.css";
import { useParams } from 'react-router-dom';

function CampanyBox({ jobTitle, companyType, location, salary, imageSrc, linkTo ,phone }) {

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
            <li><FaPhoneAlt />{phone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CampanyBox;
