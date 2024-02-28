import React from 'react'
import { useState, useEffect } from 'react';
import Loader from '../../../loader/Loader';
import CampanyBox from '../../CampanyBox/CampanyBox';
import PostJob from '../../PostJob/PostJob';
import CompanyInformation from '../../CampanyInfo/CampanyInformation';
import PostDetails from '../../PostDetails/PostDetails';
import employee from '../../../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


function EmployeJobDetail() {
  const {id} = useParams()
  const [loader, Setloader] = useState(true);
  const [FormData,setFormData] = useState({});
  console.log('jobdetails',FormData)
  useEffect(() => {
    (async () => {
      Setloader(true)
      const result = await employee.JobDetails(id);
      if (result.status === 200) {
        console.log('yel bhai',result.data.data)
        setFormData(result.data.data)
        Setloader(false)
      }
      else {
        Setloader(false)
        toast.error("erro fetching data")
      }
    })()
    }, [])

    // utlity funcitons
    function formatSalaryRange(salaryRange) {
      if(!salaryRange){
          return ""
      }
      return `${salaryRange.minimum} to ${salaryRange.maximum}`;
  }

  function formatTimestamp(timestamp) {
    // console.log(timestamp,"kuch i")
    const date = new Date(timestamp);

    // Get day, month, year
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format month as text
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[monthIndex];

    return `${day} ${month}-${year}`;
}

function formatAddress(address) {
  // console.log('addd',address)
  if(!address){
      return " "
  }
  return `${address.FlatNo}, ${address.city}, ${address.State}, ${address.Landmark}`;
}

function MakeitRight(arr){
  // console.log("hii",arr)
  if(!arr){
      return []
  }
  const newArr = [];
    arr.forEach(element => {
      newArr.push(element.value)
    });

    return  newArr;
  }

function requieThings(data){
  if(!data){
      return []
  }
  let require = []
for( let key in data){
   if(FormData?.candidateDetails[key] === true){
      require.push(key)
   }
 }

 return require
}

const sections = [
  {
      title: "LanguageKnown",
      content: MakeitRight(FormData?.candidateDetails?.LanguageKnown)
  },
  {
      title: "PreferredSkills",
      content: MakeitRight(FormData?.candidateDetails?.PreferredSkills)
  },
  {
      title: "Things Require for job",
      content: requieThings(FormData?.candidateDetails),
  }
];

  if (loader) {
    return <Loader style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} />
}
    return (
        <div className="job-post-company pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-8 p-0">
                <CampanyBox 
                jobTitle={FormData?.JobTitle}
                companyType={FormData?.user?.CompanyDetails?.CompanyInformation?.companyName}
                location={FormData?.JobLocation?.state}
                salary={formatSalaryRange(FormData?.SalaryRange)}
                imageSrc={FormData?.user?.CompanyDetails?.CompanyVerification?.Logo}
                phone={FormData?.user?.mobile}
                />
                <PostDetails sections={sections} />
              </div>
      
              <div className="col-xl-4 col-lg-4">
                <PostJob postedDate={formatTimestamp(FormData?.createdAt)}
                location={FormData?.JobLocation?.city}
                vacancy={FormData?.NoOfVacancy}
                jobNature={FormData?.JobType}
                salary={formatSalaryRange(FormData?.SalaryRange)}
                btn1='Apply'
                
                
                
                />
                <CompanyInformation 
                  name={"Contact Details"}
                  name1={FormData?.user?.CompanyName}
                  // website={AllData?.web}
                  email={FormData?.user?.email}
                  fullAddress={formatAddress(FormData?.user?.CompanyDetails?.CompanyAddress)}
                />
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default EmployeJobDetail