import React from 'react'
import { Link } from 'react-router-dom';
import PostJob from '../../../../../Components/Global/JobDescripation/PostJob/PostJob';
import CampanyBox from '../../../../../Components/Global/JobDescripation/CampanyBox/CampanyBox';
import PostDetails from '../../../../../Components/Global/JobDescripation/PostDetails/PostDetails';
import CompanyInformation from '../../../../../Components/Global/JobDescripation/CampanyInfo/CampanyInformation';
import "./EmployerViewPost.css"



function EmployerViewPost() {
    const sections = [
        {
          title: "About Me",
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
        <div className="job-post-company your-post-view pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-7 col-lg-8 p-0">

                        <CampanyBox
                            jobTitle="Software Developer"
                            companyType="Ashutosh Yadav"
                            location="New Delhi"
                            salary="$3500 - $4000"
                            imageSrc="/Utility/job-list1.png"
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
                            btn1='Download CV'
                            salary="$7,800 yearly"
                            applicationDate="12 Sep 2020"
                            applyLink="#"  // Adjust the link accordingly
                        />


                        <CompanyInformation
                            name="Contact Me"
                            para={"I'm available and eager to connect! Whether you have questions, ideas, or just want to say hello, feel free to reach out to me. I look forward to hearing from you soon."}
                            name1={"Ashutosh Yadav"}
                            website="ashutoshyadav.com"
                            email="Vipulsemwal124@gmail.com"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerViewPost