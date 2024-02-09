import React from 'react'
import JobBoxCard from '../JobBoxCard/JobBoxCard';
import "./MyjobsList.css"
import { Link } from 'react-router-dom';
function MyjobsList() {
  const jobsData = [
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list1.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'Full Time',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "part time",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list2.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'Full Time',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "part time",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list3.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'Full Time',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "part time",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list4.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'Full Time',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "part time",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
  ];
  return (
   <>
<>
  <div>
    {
      jobsData.map((i,n)=>{
       return <JobBoxCard key={n} {...i}/>
      })
    }
    <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <Link  to="/get-job" className="border-btn2">
                Browse All Sectors
              </Link>
            </div>
          </div>
        </div>
  </div>
</>
   </>
  )
}

export default MyjobsList