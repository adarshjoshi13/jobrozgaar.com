import React, { useEffect, useState } from 'react'
import { JobBoxCard } from '../../../../export'
import checkEmptyobject from '../../../../../utlity/checkEmptyobject'
function ViewJob({AllData}) {
  console.log('propsDrillingBeta',AllData)
  const [Jobs,SetJob] = useState()
  useEffect(()=>{
  SetJob(AllData.jobs)
  },[])
  // check empty object 
  
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
  if(checkEmptyobject(Jobs)){
    return(
      <div className="text-center py-8">No Job Posted Yet!</div>
    )
  }
  return (
    <div className="job-card-post pt-3">
          {
      Jobs.map((i,n)=>{
       return <JobBoxCard key={n} jobTitle={i.jobTitle} imageUrl={AllData.CompanyDetails?.CompanyVerification.Logo || ""} company={AllData?.CompanyDetails?.CompanyInformation?.companyName || ""} location={i.JobLocation.city + "," + i.JobLocation.state     } salary={i.SalaryRange.minimum + "-" + i.SalaryRange.maximum } btnTitle={'View'} btnTitle1={'Delete'}  btnTitle2={'Edit'}/>
      })
    }
    </div>
   

  )
}

export default ViewJob