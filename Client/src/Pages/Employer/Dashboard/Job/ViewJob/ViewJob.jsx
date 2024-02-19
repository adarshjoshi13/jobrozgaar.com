import React, { useEffect, useState } from 'react'
import { JobBoxCard, PopUpCard } from '../../../../export'
import {isEmptyObject,getTimeDifferenceString} from '../../../../../utlity/utlityfnc'
function ViewJob({AllData}) {
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  console.log('propsDrillingBeta',AllData)
  const [Jobs,SetJob] = useState([])
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
  if(Jobs.length === 0){
    return(
      <div className="text-center py-8">No Job Posted Yet!</div>
    )
  }

  const handleDeletePopupToggle = () => {
    setDeleteOpen(!isDeleteOpen);
  };

  const handleEditPopupToggle = () => {
    setEditOpen(!isEditOpen);
  };
  
  return (
    <div className="job-card-post pt-3">
          {
      Jobs.map((i,n)=>{
       return <JobBoxCard onClick1={handleEditPopupToggle} onClick={handleDeletePopupToggle} key={n} jobTitle={i.JobTitle} imageUrl={AllData.CompanyDetails?.CompanyVerification.Logo || ""} company={AllData?.CompanyDetails?.CompanyInformation?.companyName || ""} location={i.JobLocation.city + "," + i.JobLocation.state     } salary={i.SalaryRange.minimum + "-" + i.SalaryRange.maximum } btnTitle={'View'} btnTitle1={'Delete'}  btnTitle2={'Edit'} timeAgo={getTimeDifferenceString(new Date(i.createdAt))} mobile={AllData.mobile}/>
      })
    }

    {isDeleteOpen && (
        <PopUpCard
          Para={"If you delete this, it cannot be undone. Please think carefully."}
          title={"Are you sure you want to delete?"}
          btn1={"Delete Now"}
          url={"/Utility/del.gif"}
          Where={"#"}
          onClose={handleDeletePopupToggle}
        />
      )}

      {isEditOpen && (
        <PopUpCard
          Para={"If you want these access then you have to buy our plans first then you can do what ever your want."}
          title={"Can't Edit"}
          btn1={"Buy Now"}
          url={"/Utility/no1.gif"}
          Where={"/employer-starter-Dashboard/view-plans"}
          onClose={handleEditPopupToggle}
        />
      )}
    </div>
   

  )
}

export default ViewJob