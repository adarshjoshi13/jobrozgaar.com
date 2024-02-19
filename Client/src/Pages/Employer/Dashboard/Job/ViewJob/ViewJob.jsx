import React, { useEffect, useState } from 'react'
import { JobBoxCard, PopUpCard } from '../../../../export'
import {isEmptyObject,getTimeDifferenceString} from '../../../../../utlity/utlityfnc'
import { Loader } from '../../../../../Components/export';
import { useNavigate } from 'react-router-dom';
import employerData from '../../../../../API/Employer/EmployerData';
import { ToastContainer, toast } from 'react-toastify';
function ViewJob({AllData,Reload}) {
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [loader, Setloader] = useState(false);
  const navigate = useNavigate()
  const [ToDelete,SetDelete] = useState('')
  console.log('propsDrillingBeta',AllData)
  const [Jobs,SetJob] = useState([])
  useEffect(()=>{
  SetJob(AllData.jobs)
  },[])
  // check empty object 
  const submitHandler =  async (id) => {
    // console.log(id)
    Setloader(true)
    const result = await employerData.DeleteAjob(id)
    // console.log("this is the result", result)

    if (result === null) {
      Setloader(false)
      setDeleteOpen(false)
      toast.warn("something went wrong please try again")
    }

    if (result.status === 200) {
      Setloader(false);
      toast.success(result.data.message)
      SetDelete('')
      setDeleteOpen(false)
        Reload()
    }

    else {
      Setloader(false);
      toast.error(result.data.message)
      setDeleteOpen(false)
    }


  }
  // const jobsData = [
  //   {
  //     jobTitle: 'Digital Marketer',
  //     imageUrl: '/Utility/job-list1.png',
  //     company: 'Creative Agency',
  //     location: 'Athens, Greece',
  //     salary: '$3500 - $4000',
  //     btnTitle: 'View',
  //     btnTitle1: 'Delete',
  //     btnTitle2: 'Edit',
  //     timeAgo: "part time",
  //     linkToDetails: '#',
  //   },
  //   {
  //     jobTitle: 'Digital Marketer',
  //     imageUrl: '/Utility/job-list2.png',
  //     company: 'Creative Agency',
  //     location: 'Athens, Greece',
  //     salary: '$3500 - $4000',
  //     btnTitle: 'View',
  //     btnTitle1: 'Delete',
  //     btnTitle2: 'Edit',
  //     timeAgo: "part time",
  //     linkToDetails: '#',
  //   },
  //   {
  //     jobTitle: 'Digital Marketer',
  //     imageUrl: '/Utility/job-list3.png',
  //     company: 'Creative Agency',
  //     location: 'Athens, Greece',
  //     salary: '$3500 - $4000',
  //     btnTitle: 'View',
  //     btnTitle1: 'Delete',
  //     btnTitle2: 'Edit',
  //     timeAgo: "part time",
  //     linkToDetails: '#',
  //   },
  //   {
  //     jobTitle: 'Digital Marketer',
  //     imageUrl: '/Utility/job-list4.png',
  //     company: 'Creative Agency',
  //     location: 'Athens, Greece',
  //     salary: '$3500 - $4000',
  //     btnTitle: 'View',
  //     btnTitle1: 'Delete',
  //     btnTitle2: 'Edit',
  //     timeAgo: "part time",
  //     linkToDetails: '#',
  //   },
  // ];
  if(Jobs.length === 0){
    return(
      <div className="text-center py-8">No Job Posted Yet!</div>
    )
  }

  const handleDeletePopupToggle = (e) => {
    console.log('if data coming',e.target.id)
    setDeleteOpen(!isDeleteOpen);
    SetDelete(e.target.id)
  };

  const handleEditPopupToggle = () => {
    setEditOpen(!isEditOpen);
  };
  
  return (
    <div className="job-card-post pt-3">
          {
      Jobs.map((i,n)=>{
       return <JobBoxCard onClick1={handleEditPopupToggle} id={i._id} onClick={(e)=>{
        handleDeletePopupToggle(e)
       }} linkToDetails1={"/employer-starter-Dashboard/view-job/post"} key={n} jobTitle={i.JobTitle} imageUrl={AllData.CompanyDetails?.CompanyVerification.Logo || ""} company={AllData?.CompanyDetails?.CompanyInformation?.companyName || ""} location={i.JobLocation.city + "," + i.JobLocation.state     } salary={i.SalaryRange.minimum + "-" + i.SalaryRange.maximum } btnTitle={'View'} btnTitle1={'Delete'}  btnTitle2={'Edit'} timeAgo={getTimeDifferenceString(new Date(i.createdAt))} mobile={AllData.mobile}/>
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
          onClick={()=>{
            submitHandler(ToDelete)
          }}
          loader={loader}
         
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