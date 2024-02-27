import React from 'react'
import { Link } from 'react-router-dom';
import CampanyBox from './CampanyBox/CampanyBox';
import PostJob from './PostJob/PostJob';
import CompanyInformation from './CampanyInfo/CampanyInformation';
import "./JobDescripation.css"
import PostDetails from './PostDetails/PostDetails';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import { Candidate } from '../../../Pages/export';
import employerData from '../../../API/Employer/EmployerData';
import { ToastContainer, toast } from 'react-toastify';

function JobDescription({AllData,Reload}) {
    console.log('getting in',AllData)
    let { id } = useParams();
    const [jobDetail, setJobDetail] = useState({});
    const [section, setSection] = useState([]);
    const [loader, setLoader] = useState(false);
    // console.log('chik chik',jobDetail)
    const [Dltloader, SetDltloader] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoader(true);
        if(AllData.jobs){
            setLoader(false)
            const job = AllData?.jobs?.filter((i) => {
                return i._id === id;
            });
            setJobDetail(job[0]);
        }
        
      
    }, [AllData,id]);

    function formatAddress(address) {
        // console.log('addd',address)
        if(!address){
            return " "
        }
        return `${address.FlatNo}, ${address.city}, ${address.State}, ${address.Landmark}`;
    }
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
         if(jobDetail?.candidateDetails[key] === true){
            require.push(key)
         }
       }

       return require
    }

      
    const sections = [
        {
            title: "LanguageKnown",
            content: MakeitRight(jobDetail?.candidateDetails?.LanguageKnown)
        },
        {
            title: "PreferredSkills",
            content: MakeitRight(jobDetail?.candidateDetails?.PreferredSkills)
        },
        {
            title: "Things Require for job",
            content: requieThings(jobDetail?.candidateDetails),
        }
    ];

    const DltHandler =  async (i) => {
        // console.log(id)
        SetDltloader(true)
        const result = await employerData.DeleteAjob(i)
        // console.log("this is the result", result)
    
        if (result === null) {
          SetDltloader(false)

          toast.warn("something went wrong please try again")
        }
    
        if (result.status === 200) {
          SetDltloader(false);
          toast.success(result.data.message)
          Reload()
          navigate('/employer-starter-Dashboard/view-job')
        }
    
        else {
          SetDltloader(false);
          toast.error(result.data.message)
        }
    
    
      }



     if(loader){
    return <Loader style={{ width: '100%',
    height: '80vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
  }
    return (
        <div className="job-post-company pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-7 col-lg-8 p-0">

                        <CampanyBox
                           jobTitle={jobDetail?.JobTitle}
                            companyType={AllData?.CompanyName}
                            location={jobDetail?.JobLocation?.city}
                            salary={formatSalaryRange(jobDetail?.SalaryRange)}
                            imageSrc={AllData?.CompanyDetails?.CompanyVerification?.Logo} 
                            linkTo="#"
                            phone={AllData?.mobile}// Adjust the link accordingly
                        />

                        <PostDetails sections={sections} />
                    </div>

                    <div className="col-xl-4 col-lg-4">

                        <PostJob
                            postedDate={formatTimestamp(jobDetail?.createdAt)}
                            location={jobDetail?.JobLocation?.city}
                            vacancy={jobDetail?.NoOfVacancy}
                            jobNature={jobDetail?.JobType}
                            salary={formatSalaryRange(jobDetail?.SalaryRange)}
                            applicationDate="12 Sep 2020"
                            applyLink="#"  // Adjust the link accordingly
                            EmployerShow={false}
                            btn1='Delete'
                            loader={Dltloader}
                            onClick={()=>{
                             DltHandler(id)
                            }}
                        />


                        <CompanyInformation
                            name={"Contact Details"}
                            name1={AllData?.CompanyName}
                            website={AllData?.web}
                            email={AllData?.email}
                            fullAddress={formatAddress(AllData?.CompanyDetails?.CompanyAddress)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription