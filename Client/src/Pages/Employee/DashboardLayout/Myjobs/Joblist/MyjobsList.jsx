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
      btnTitle: 'View',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "3 hours ago",
      mobile:"8178710398",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list2.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "3 hours ago",
      mobile:"8379273947",
      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list3.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "3 hours ago",
      mobile:"9873839487",

      linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list4.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Save',
      btnTitle2: 'Apply',
      timeAgo: "3 hours ago",
      mobile:"6548236548",
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