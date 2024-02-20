import React, { useState } from 'react';
import './OfferLetter.css';
import { useFormik } from 'formik';
import { FaDownload } from "react-icons/fa";
import { AboutMe, SelectInput, ArrowNavigate, Button } from '../../../../Components/export';
import employee from '../../../../API/Employee'

function OfferLetter() {



    const jobTitleOptions = [
        { value: 'option1', label: 'Job Title' },
        { value: 'Amazon', label: 'Amazon' },
        { value: 'Microsoft', label: 'Microsoft' },
        { value: 'Apple', label: 'Apple' }
    ];

    const selectinput = {
        fontSize: "15px"
    }
    const [select, SetSelect] = useState(jobTitleOptions[0].value)
    return (
        <>
            <div className="container p-0 mt-3 offerletter">
                <ArrowNavigate url={"/Utility/offer.png"} />
                <AboutMe />
                <div class="col-md-12"><h4 className="mt-0 text-center mb-4" style={{ color: "rgb(143, 170, 70)" }}>Offer Letter</h4></div>
                <div className="container">
                    <div className="row ">

                        <div className="col-md-8 ">
                            <div className="row  mb-3">
                                <div className="col-md-6 p-0 letter-head  d-flex justify-content-start align-items-start">
                                    <div className="d-flex gap-1 text-center justify-content-center align-items-center">

                                        <img className='check-png' src="/Utility/check.png" alt="" />


                                        <h6 className='m-0 '>My Offer Letter</h6>


                                    </div>


                                </div>
                                <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-md-12 p-0">
                                            <SelectInput
                                                selectinput={selectinput}
                                                id="exampleDropdown"
                                                name="LookingForJobs.JobTitle"
                                                value={select}
                                                handleChange={(e) => {
                                                    SetSelect(e.target.value);
                                                }}

                                                options={jobTitleOptions}

                                            />
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-end">
                                            <Button title={"Download Now"} />

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
