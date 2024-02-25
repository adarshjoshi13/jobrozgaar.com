import React, { useState } from 'react';
import "./Fliterjob.css"
import Select from 'react-select';
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




const FliterJob = () => {
    const [selectedValue, setSelectedValue] = useState(null)
    const [value, setValue] = useState(50);

    const handleRange = (event) => {
        setValue(event.target.value);
    };

    const handleChange = (newValue) => {
        setSelectedValue(newValue);
    };
    return (
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
                                        <div className="range_item">
                                            <input type="range"
                                                className='range-input-of'
                                                style={{ width: "100%" }}
                                                value={value}
                                                max={"547"}
                                                min={"12"}
                                                onChange={handleRange}

                                            />
                                            <div className="d-flex align-items-center">
                                                <div className="price_text">
                                                    <p>Price : 130</p>
                                                </div>
                                                <div className="price_value d-flex justify-content-center">
                                                    <input type="text" id="amount" />
                                                    <span>to :  {value}</span>
                                                    <input type="text" id="amount" />
                                                </div>
                                            </div>
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
                                                <span>Sort by</span>
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

                                
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FliterJob;
