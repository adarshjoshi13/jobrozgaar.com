import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./JobCard.css";

const JobCard = ({ jobTitle, imageUrl, company, location, salary, timeAgo, linkToDetails }) => {
  useEffect(() => {
    AOS.init({
        duration: 500,
        easing: 'ease-out',
        once: true
    });
}, []);
  return (
    <div className="single-job-items" data-aos="fade-left">
      <div className="job-items">
        <div className="company-img">
          <Link to={linkToDetails}>
            <img src={imageUrl} alt="" />
          </Link>
        </div>
        <div className="job-tittle">
          <Link to={linkToDetails}>
            <h4>{jobTitle}</h4>
          </Link>
          <ul className='p-0 d-flex gap-1 flex-wrap align-items-center'>
            <li>{company}</li>
            <li>
              <FaMapMarkerAlt />
              {location}
            </li>
            <li>{salary}</li>
          </ul>
        </div>
      </div>
      <div className="items-link f-right">
      <div className='d-flex'>
         <Link  className='Full-time-btn' to={linkToDetails}>{timeAgo}</Link>
        <Link  className='Full-time-btn' to={linkToDetails}>{timeAgo}</Link>
        <Link  className='Full-time-btn' to={linkToDetails}>{timeAgo}</Link>
      </div>
       
        <span>{timeAgo} ago</span>
      </div>
    </div>
  );
};

export default JobCard;
