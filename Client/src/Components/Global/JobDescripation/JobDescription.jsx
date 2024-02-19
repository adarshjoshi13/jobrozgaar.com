import React from 'react'
import { Link } from 'react-router-dom';
import CampanyBox from './CampanyBox/CampanyBox';
import PostJob from './PostJob/PostJob';
import CompanyInformation from './CampanyInfo/CampanyInformation';
import "./JobDescripation.css"
import PostDetails from './PostDetails/PostDetails';

function JobDescription() {
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
                            jobTitle="Digital Marketer"
                            companyType="Creative Agency"
                            location="Athens, Greece"
                            salary="$3500 - $4000"
                            imageSrc="/Utility/go.jpg"
                            linkTo="#"
                            phone={"8178710398"}// Adjust the link accordingly
                        />

                        <PostDetails sections={sections} />
                    </div>

                    <div className="col-xl-4 col-lg-4">

                        <PostJob
                            postedDate="12 Aug 2019"
                            location="New York"
                            vacancy="02"
                            jobNature="Full time"
                            salary="$7,800 yearly"
                            applicationDate="12 Sep 2020"
                            applyLink="#"  // Adjust the link accordingly
                        />


                        <CompanyInformation
                            name={"Contact Details"}
                            name1="Vipul Narayan Semwal Pandit"
                            website="vipulbillioner124@gmail.com"
                            email="Vipulsemwal124@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription