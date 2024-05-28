import React, { useState } from 'react';
// import "./Fliterjob.css"
import Select from 'react-select';
import { JobBoxCard } from '../export';
import { Banner, UseBanner } from '../../Components/export';
import Pageination from '../../Components/Global/UI/Pageination/Pageination';
// const [selectedValue, setSelectedValue] = useState(null);



const options = [
    { value: 'option1', label: 'All Category' },
    { value: 'option2', label: 'Category 1' },
    { value: 'option3', label: 'Category 2' },
    { value: 'option4', label: 'Category 3' },
    { value: 'option5', label: 'Category 4' },
];

const anywhere = [
    { value: 'option1', label: 'Anywhere' },
    { value: 'option2', label: 'Category 1' },
    { value: 'option3', label: 'Category 2' },
    { value: 'option4', label: 'Category 3' },
    { value: 'option5', label: 'Category 4' },
];


const lists = [
    { value: 'option1', label: 'Anywhere' },
    { value: 'option2', label: 'Category 1' },
    { value: 'option3', label: 'Category 2' },
    { value: 'option4', label: 'Category 3' },
    { value: 'option5', label: 'Category 4' },
];



const jobsData = [
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list1.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "8178710398",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list2.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "8379273947",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list3.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "9873839487",

        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list4.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "6548236548",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list4.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "6548236548",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list4.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "6548236548",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
    {
        jobTitle: 'Digital Marketer',
        imageUrl: '/Utility/job-list4.png',
        company: 'Creative Agency',
        location: 'Athens, Greece',
        salary: '$3500 - $4000',
        btnTitle: 'View',
        btnTitle1: 'Save',
        btnTitle2: 'Apply',
        timeAgo: "3 hours ago",
        mobile: "6548236548",
        linkToDetails: '/Dashboard/jobs/job-details',
    },
];



const FliterJob = () => {
    const [selectedValue, setSelectedValue] = useState(null)
    const [value, setValue] = useState(50);

    const handleRange = (event) => {
        setValue(event.target.value);
    };

    const handleChange = (newValue) => {
        setSelectedValue(newValue);
    };


    const [leftValue, setLeftValue] = useState(25);
    const [rightValue, setRightValue] = useState(75);

    const handleLeftChange = (e) => {
        const newValue = Math.min(parseInt(e.target.value), rightValue - 1);
        setLeftValue(newValue);
    };

    const handleRightChange = (e) => {
        const newValue = Math.max(parseInt(e.target.value), leftValue + 1);
        setRightValue(newValue);
    };

    return (
        <>
            <UseBanner backgroundImg='https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg?t=st=1708940781~exp=1708944381~hmac=06611d6397e85188e3636ee1426422ae54948f42fa0296fc3581f67abb999cec&w=1380' />
            <div className="job-listing-area mt-5 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="small-section-tittle2 mb-5">
                                        <div className="ion">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="12px">
                                                <path fill="#87b724" d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z" />
                                            </svg>
                                        </div>
                                        <h4>Filter Jobs</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Rest of the code for filter options */}

                            <div className="job-category-listing mb-50">
                                <div className="single-listing">
                                    <div className="small-section-tittle2">
                                        <h4>Job Category</h4>
                                    </div>
                                    <div className="select-job-items2 mb-4">
                                        <Select
                                            options={options}
                                            value={selectedValue}
                                            onChange={handleChange}
                                            placeholder="Select an option"
                                        />

                                    </div>
                                    <div className="select-Categories mt-80 mb-5">
                                        <div className="small-section-tittle2">
                                            <h4>Job Type</h4>
                                        </div>
                                        <label className="container">
                                            Full Time
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Part Time
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Remote
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Freelance
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="single-listing">
                                    <div className="small-section-tittle2">
                                        <h4>Job Location</h4>
                                    </div>
                                    <div className="select-job-items2 mb-4">
                                        <Select
                                            options={anywhere}
                                            value={selectedValue}
                                            onChange={handleChange}
                                            placeholder="Select an option"
                                        />

                                    </div>
                                    <div className="select-Categories mt-8 mb-5">
                                        <div className="small-section-tittle2">
                                            <h4>Experience</h4>
                                        </div>
                                        <label className="container">
                                            1-2 Years
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            2-3 Years
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            3-6 Years
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            6-more..
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="single-listing">
                                    <div className="select-Categories mb-5">
                                        <div className="small-section-tittle2">
                                            <h4>Posted Within</h4>
                                        </div>
                                        <label className="container">
                                            Any
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Today
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Last 2 days
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Last 3 days
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Last 5 days
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container">
                                            Last 10 days
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="single-listing">
                                    <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                                        <div className="small-section-tittle2">
                                            <h4>Filter Jobs</h4>
                                        </div>
                                        <div className="widgets_inner">
                                            <div className="middle">
                                                <div className="multi-range-slider">
                                                    <input
                                                        type="range"
                                                        id="input-left"
                                                        min="0"
                                                        max="100"
                                                        value={leftValue}
                                                        onChange={handleLeftChange}
                                                    />
                                                    <input
                                                        type="range"
                                                        id="input-right"
                                                        min="0"
                                                        max="100"
                                                        value={rightValue}
                                                        onChange={handleRightChange}
                                                    />

                                                    <div className="slider">
                                                        <div className="track"></div>
                                                        <div className="range" style={{ left: `${leftValue}%`, right: `${100 - rightValue}%` }}></div>
                                                        <div className="thumb left" style={{ left: `${leftValue}%` }}></div>
                                                        <div className="thumb right" style={{ right: `${100 - rightValue}%` }}></div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='pt-3'>
                                                <p>Price : {leftValue}  To : {rightValue}</p>

                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-8">
                            <section className="featured-job-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="count-job mb-35">
                                                <span>39, 782 Jobs found</span>
                                                <div className="select-job-items">
                                                    <span className='p-1'>Sort by</span>
                                                    <Select
                                                        options={options}
                                                        value={selectedValue}
                                                        onChange={handleChange}
                                                        placeholder="Select an option"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Rest of the code for featured job items */}
                                    <div className="job-card-covers-fill ">
                                        {
                                            jobsData.map((i, n) => {
                                                return <JobBoxCard key={n} {...i} />
                                            })
                                        }
                                    </div>


                                </div>
                            </section>
                        </div>
                    </div>
                    
                </div>
                <Pageination />
            </div>
        </>

    );
};

export default FliterJob;
