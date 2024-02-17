import React from 'react'
import { JobBoxCard } from '../../../../export'
function ViewJob() {
  const jobsData = [
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list1.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Delete',
      btnTitle2: 'Edit',
      timeAgo: "part time",
      linkToDetails: '#',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list2.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Delete',
      btnTitle2: 'Edit',
      timeAgo: "part time",
      linkToDetails: '#',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list3.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Delete',
      btnTitle2: 'Edit',
      timeAgo: "part time",
      linkToDetails: '#',
    },
    {
      jobTitle: 'Digital Marketer',
      imageUrl: '/Utility/job-list4.png',
      company: 'Creative Agency',
      location: 'Athens, Greece',
      salary: '$3500 - $4000',
      btnTitle: 'View',
      btnTitle1: 'Delete',
      btnTitle2: 'Edit',
      timeAgo: "part time",
      linkToDetails: '#',
    },
  ];
  return (
    <div className="job-card-post pt-3">
          {
      jobsData.map((i,n)=>{
       return <JobBoxCard key={n} {...i}/>
      })
    }
    </div>
   

  )
}

export default ViewJob