import React, { useState } from 'react'
import "./WorkersCard.css"
import { Link } from 'react-router-dom';
import JobBoxCard from '../../../Employee/DashboardLayout/Myjobs/JobBoxCard/JobBoxCard';
import PopUpCard from '../PopUpCard/PopUpCard';
function WorkersCard() {
    const [Edit,setEdit] = useState(false);
    function handleChange(){
        setEdit(!Edit)
    }
    const WorkerData = [
        {
            jobTitle: 'Software engineer',
            imageUrl: '/Utility/worker.jpg',
            company: 'Mohan Joshi',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "*******398",
            btnTitle: 'View Profile',
            btnTitle1: 'Hire',
            btnTitle2: 'Save',
            timeAgo: "1 Hour ",
            linkToDetails: '#',
        },
        {
            jobTitle: 'Auto Driver',
            imageUrl: '/Utility/driver.jpg',
            company: 'Rajesh Kumar',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "*******693",
            btnTitle: 'View Profile',
            btnTitle1: 'Hire',
            btnTitle2: 'Save',
            timeAgo: "35 mins ",
            linkToDetails: '#',
        },
        {
            jobTitle: 'HR Manager',
            imageUrl: '/Utility/paji.jpg',
            company: 'Dilkush Chadha',
            location: 'Punjab',
            salary: '$3500 - $4000',
            mobile : "*******268",
            btnTitle: 'View Profile',
            btnTitle1: 'Hire',
            btnTitle2: 'Save',
            timeAgo: "3 days ",
            linkToDetails: '#',
        },
        {
            jobTitle: 'Teachnical Fixer',
            imageUrl: 'https://247-call.com/wp-content/uploads/2023/10/indian-call-center.webp',
            company: 'Rupra Kumari',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "*******094",
            btnTitle: 'View Profile',
            btnTitle1: 'Hire',
            btnTitle2: 'Save',
            timeAgo: "2 weeks ",
            linkToDetails: '#',
        },
    ];
    return (
        <>
            {
                WorkerData.map((i, n) => {
                    return <JobBoxCard onClick={handleChange} key={n} {...i} />
                })
            }

            {
                Edit && <PopUpCard url={"/Utility/no1.gif"} Where={"/employer-starter-Dashboard/view-plans"} onClose={handleChange} />
            }


            <div className="row">
                <div className="col-lg-12">
                    <div className="browse-btn2 text-center mt-50">
                        <Link to="/get-job" className="border-btn2">
                            Browse All Sectors
                        </Link>
                    </div>
                </div>
            </div>

        </>


    )
}

export default WorkersCard