import React from 'react';
import './PersonalDetails.css'; // Assuming you have a corresponding CSS file
import { Link } from 'react-router-dom';
import PersonalNav from './personalNav/personalNav';
import FormBar from './formbar/FormBar';
import DateInput from './dateInput/DateInput';
import ButtonEdit from './ButtonEdit/ButtonEdit';
import InputButton from './InputButton/InputButton';
import SmallBanner from './SmallBanner/SmallBanner';
import AboutMe from './AboutMe/AboutMe';

function PersonalDetails() {
    return (
        <div className="personal-details ">
            {/* Navbar */}
            <PersonalNav />
            <div className="conatiner">
              <AboutMe/>

                <SmallBanner
                    personalImage="/Utility/personal.png"
                    workImage="/Utility/work.png"
                    eduImage="/Utility/edu.png"
                />




                <FormBar title={"Name"} type={"text"} placeholder={"Enter your name"} />
                <FormBar
                    title={"Father’s Name /Husband Name"} type={"text"} placeholder={"Enter your name"}
                />



                <DateInput
                    label1="Date of Birth"
                    placeholder1="Date"
                    type={"date"}
                    type2={"text"}
                    label2="Marital Status"
                    placeholder2="Status"
                />
                <DateInput
                    label1="Gender"
                    placeholder1="Gender"
                    type={"text"}
                    type2={"text"}
                    label2="Religion"
                    placeholder2="Status"
                />

                <FormBar
                    title={"Current Address"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                />

                <DateInput
                    label1="Current City"
                    placeholder1="Gender"
                    type={"text"}
                    type2={"text"}
                    label2="Current State"
                    placeholder2="Status"
                />
                <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
                    <div className="m-1 checkbox-wrapper-31">
                        <input type="checkbox" />
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>

                    </div>
                    <h6 style={{ color: "gray" }}>Current Address and Permanent Address as same</h6>
                </div>
                <FormBar
                    title={"Permanent Address"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                />
                <FormBar
                    title={"Language Number"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                />
                <FormBar
                    title={"Mobile Number"}
                    type={"number"}
                    placeholder={"Enter your Address"}
                />

                <InputButton title={"Aadhar Number"} placeholder={"Enter Aadhar Number"} />
                <InputButton title={"Pan Card Number"} placeholder={"Enter Pan Card Number"} />
                <InputButton title={"Driving Licence No"} placeholder={"Enter Driving Licence No."} />
            </div>



        </div>

    );
}

export default PersonalDetails;
