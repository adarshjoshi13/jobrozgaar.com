import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt ,FaPhoneAlt  } from 'react-icons/fa';
import "./JobBoxCard.css";

const JobBoxCard = ({ onClick,jobTitle, imageUrl, company, location, salary, btnTitle, linkToDetails, btnTitle1, btnTitle2, timeAgo ,mobile }) => {
    return (
        <div className="Job-Box-single">
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
                    <ul className='p-0'>
                        <li>{company}</li>
                        <li>
                            <FaMapMarkerAlt />
                            {location}
                        </li>
                        <li>{salary}</li>
                        <li> <FaPhoneAlt/>
                        {mobile}</li>
                    </ul>
                </div>
            </div>
            <div className="items-link f-right">
                <div className='d-flex flex-wrap'>
                    <Link onClick={onClick} className='Appy-Btn' to={linkToDetails}>{btnTitle1}</Link>
                    <Link className='Appy-Btn' to={linkToDetails}>{btnTitle}</Link>
                    <Link className='Appy-Btn' to={linkToDetails}>{btnTitle2}</Link>
                </div>

                <span>{timeAgo} ago</span>
            </div>
        </div>
    );
};

export default JobBoxCard;
