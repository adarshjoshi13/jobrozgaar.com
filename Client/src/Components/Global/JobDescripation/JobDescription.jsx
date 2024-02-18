import React from 'react'
import { Link } from 'react-router-dom';
import CampanyBox from './CampanyBox/CampanyBox';
import PostJob from './PostJob/PostJob';
import "./JobDescripation.css"

function JobDescription() {
    return (
        <div className="job-post-company pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-7 col-lg-8">

                        <CampanyBox
                            jobTitle="Digital Marketer"
                            companyType="Creative Agency"
                            location="Athens, Greece"
                            salary="$3500 - $4000"
                            imageSrc="/Utility/job-list1.png"
                            linkTo="#"  // Adjust the link accordingly
                        />

                        <div className="job-post-details">
                            <div className="post-details1 mb-50">
                                <div className="small-section-tittle">
                                    <h4>Job Description</h4>
                                </div>
                                <p>It is a long established fact that a reader will beff distracted by vbthe creadable content of a page when looking at its layout. The pointf of using Lorem Ipsum is that it has ahf mcore or-lgess normal distribution of letters, as opposed to using, Content here content here making it look like readable.</p>
                            </div>
                            <div className="post-details2  mb-50">
                                <div className="small-section-tittle">
                                    <h4>Required Knowledge, Skills, and Abilities</h4>
                                </div>
                                <ul>
                                    <li>System Software Development</li>
                                    <li>Mobile Applicationin iOS/Android/Tizen or other platform</li>
                                    <li>Research and code, libraries, APIs and frameworks</li>
                                    <li>Strong knowledge on software development life cycle</li>
                                    <li>Strong problem solving and debugging skills</li>
                                </ul>
                            </div>
                            <div className="post-details2  mb-50">
                                <div className="small-section-tittle">
                                    <h4>Education + Experience</h4>
                                </div>
                                <ul>
                                    <li>3 or more years of professional design experience</li>
                                    <li>Direct response email experience</li>
                                    <li>Ecommerce website design experience</li>
                                    <li>Familiarity with mobile and web apps preferred</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </div>
                        </div>
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


                        <div className="post-details4  mb-50">
                            <div className="small-section-tittle">
                                <h4>Company Information</h4>
                            </div>
                            <span>Colorlib</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <ul>
                                <li>Name: <span>Colorlib </span></li>
                                <li>Web : <span>colorlib.com</span></li>
                                <li>Email: <span><Link to="" className="" >Vipulsemwal124@gmail.com</Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription