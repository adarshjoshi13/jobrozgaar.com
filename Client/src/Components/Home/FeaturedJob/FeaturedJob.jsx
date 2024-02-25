import React from 'react';
import { JobCard } from '../../export';
import "./FeaturedJob.css"
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
  const jobsData = [
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list1.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      timeAgo: 'Full Time',
      linkToDetails: '/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list2.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      timeAgo: 'Full Time',
      linkToDetails: '/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list3.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      timeAgo: 'Full Time',
      linkToDetails: '/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list4.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      timeAgo: 'Full Time',
      linkToDetails: '/job-details',
    },
  ];

  return (
    <>
         <hr />
    <section className="featured-job-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-left">
              <h4>Featured Jobs</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            {jobsData.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <Link  to="/fliter-jobs" className="border-btn2">
                Browse All Sectors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default FeaturedJobs;
