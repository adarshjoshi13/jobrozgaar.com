import React from 'react'
import { Link } from 'react-router-dom';
import CampanyBox from './CampanyBox/CampanyBox';
import PostJob from './PostJob/PostJob';
import CompanyInformation from './CampanyInfo/CampanyInformation';
import "./JobDescripation.css"
import PostDetails from './PostDetails/PostDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import { Candidate } from '../../../Pages/export';

function JobDescription({AllData}) {
    console.log('getting in',AllData)
    let { id } = useParams();
    const [jobDetail, setJobDetail] = useState({});
    const [section, setSection] = useState([]);
    const [loader, setLoader] = useState(false);
    console.log('chik chik',jobDetail)

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
        console.log(data,"bhuu bhuu")
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
                            location={formatAddress(AllData?.CompanyDetails?.CompanyAddress)}
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
                            EmployerShow={true}
                        />


                        <CompanyInformation
                            name={"Contact Details"}
                            name1={AllData?.CompanyName}
                            website={AllData?.web}
                            email={AllData?.email}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription