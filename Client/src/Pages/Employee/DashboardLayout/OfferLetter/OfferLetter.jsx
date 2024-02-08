import React from 'react';
import './OfferLetter.css';
import { useFormik } from 'formik';
import { FaDownload } from "react-icons/fa";
import { AboutMe, SelectInput ,ArrowNavigate } from '../../../../Components/export';

function OfferLetter() {
    const formik = useFormik({
        initialValues: {
            LookingForJobs: {
                JobTitle: 'option1' // Assuming initial value
            }
        },
        // Your formik configuration
    });

    const jobTitleOptions = [
        { value: 'option1', label: 'Job Title' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    return (
        <>
            <div className="container offerletter">
                <AboutMe />
                <div className="container">
                    <div className="row ">
                        <ArrowNavigate url={"/Utility/offer.png"}/>
                        <div className="col-md-8 ">
                            <div className="row  mb-3">
                                <div className="col-md-6 letter-head  d-flex justify-content-start align-items-start">
                                    <div className="d-flex gap-1 text-center justify-content-center align-items-center">

                                        <img className='check-png' src="/Utility/check.png" alt="" />


                                        <h5 className='m-0 '>My Offer Letter</h5>


                                    </div>


                                </div>
                                <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <SelectInput

                                                id="exampleDropdown"
                                                name="LookingForJobs.JobTitle"
                                                value={""}
                                               
                                                options={jobTitleOptions}

                                            />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <button className='download-red'>
                                                <FaDownload /> {/* Using the Bookmark icon */}
                                                Download Now
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default OfferLetter;
