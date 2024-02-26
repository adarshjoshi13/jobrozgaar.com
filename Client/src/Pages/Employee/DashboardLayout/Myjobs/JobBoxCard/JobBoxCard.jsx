import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt ,FaPhoneAlt ,FaRupeeSign } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import "./JobBoxCard.css";

const JobBoxCard = ({ onClick1, onClick,jobTitle, imageUrl, company, location, salary, btnTitle, linkToDetails ,linkToDetails1, btnTitle1, btnTitle2, timeAgo ,mobile,id }) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-out',
            once: true
        });
    }, []);
    return (
        <div className="Job-Box-single" data-aos="fade-right">
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
                        <li><FaRupeeSign/>{salary}</li>
                        <li> <FaPhoneAlt/>
                        {mobile}</li>
                    </ul>
                </div>
            </div>
            <div className="items-link f-right">
                <div className='d-flex flex-wrap'>
                    <Link onClick={onClick} className='Appy-Btn' to={linkToDetails} id={id}>{btnTitle1}</Link>
                    <Link className='Appy-Btn' to={linkToDetails1}>{btnTitle}</Link>
                    <Link onClick={onClick1} className='Appy-Btn' to={linkToDetails}>{btnTitle2}</Link>
                </div>

                <span>{timeAgo}</span>
            </div>
        </div>
    );
};

export default JobBoxCard;
