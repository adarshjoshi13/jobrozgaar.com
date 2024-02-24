import React from 'react'
import { Link } from 'react-router-dom';
import CampanyBox from './CampanyBox/CampanyBox';
import PostJob from './PostJob/PostJob';
import CompanyInformation from './CampanyInfo/CampanyInformation';
import "./JobDescripation.css"
import PostDetails from './PostDetails/PostDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function JobDescription({AllData}) {
    console.log('getting in',AllData)
    let { id } = useParams();
    const [jobDetail, setJobDetail] = useState({});
    console.log('chik chik',jobDetail)

    useEffect(() => {
        if(AllData.jobs){
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
    // if (!AllData || Object.keys(jobDetail).length === 0) {
    //     return <div>Loading...</div>; // Or any other loading indicator
    // }
    const sections = [
        {
            title: "Job Description",
            content: [
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, Content here content here making it look like readable."
            ]
        },
        {
            title: "Required Knowledge, Skills, and Abilities",
            content: [
                "System Software Development",
                "Mobile Application in iOS/Android/Tizen or other platform",
                "Research and code, libraries, APIs and frameworks",
                "Strong knowledge on software development life cycle",
                "Strong problem solving and debugging skills"
            ]
        },
        {
            title: "Education + Experience",
            content: [
                "3 or more years of professional design experience",
                "Direct response email experience",
                "Ecommerce website design experience",
                "Familiarity with mobile and web apps preferred",
                "Experience using Invision a plus"
            ]
        }
    ];
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