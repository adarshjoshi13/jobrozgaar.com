import React from 'react'
import "./WorkersCard.css"
import { Link } from 'react-router-dom';
import JobBoxCard from '../../../Employee/DashboardLayout/Myjobs/JobBoxCard/JobBoxCard';
function WorkersCard() {
    const WorkerData = [
        {
            jobTitle: 'Software engineer',
            imageUrl: '/Utility/worker.jpg',
            company: 'Mohan Joshi',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "8178710398",
            btnTitle: 'Full Time',
            btnTitle1: 'Save',
            btnTitle2: 'Hire',
            timeAgo: "part time",
            linkToDetails: '#',
        },
        {
            jobTitle: 'Auto Driver',
            imageUrl: '/Utility/driver.jpg',
            company: 'Rajesh Kumar',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "8178710398",
            btnTitle: 'Full Time',
            btnTitle1: 'Save',
            btnTitle2: 'Hire',
            timeAgo: "part time",
            linkToDetails: '#',
        },
        {
            jobTitle: 'HR Manager',
            imageUrl: '/Utility/paji.jpg',
            company: 'Dilkush Chadha',
            location: 'Punjab',
            salary: '$3500 - $4000',
            mobile : "8178710398",
            btnTitle: 'Full Time',
            btnTitle1: 'Save',
            btnTitle2: 'Hire',
            timeAgo: "part time",
            linkToDetails: '#',
        },
        {
            jobTitle: 'Teachnical Fixer',
            imageUrl: 'https://247-call.com/wp-content/uploads/2023/10/indian-call-center.webp',
            company: 'Rupra Kumari',
            location: 'New Delhi',
            salary: '$3500 - $4000',
            mobile : "8178710398",
            btnTitle: 'Full Time',
            btnTitle1: 'Save',
            btnTitle2: 'Hire',
            timeAgo: "part time",
            linkToDetails: '#',
        },
    ];
    return (
        <>
            {
                WorkerData.map((i, n) => {
                    return <JobBoxCard key={n} {...i} />
                })
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