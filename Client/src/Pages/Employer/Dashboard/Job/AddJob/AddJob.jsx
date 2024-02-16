import React, { useState } from 'react';
import { JobPosting, Candidate } from '../../../../../Pages/export'
import "./AddJob.css";

function AddJob() {
    const [currentStep, setCurrentStep] = useState(1);

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }

    return (
        <div className="container p-0">
            <div className="progresbar">
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li className={currentStep === 1 ? 'is-active' : ''}>
                            Start
                            <div className="progress-bar progress-bar--success">
                                <div className="progress-bar__bar"></div>
                            </div>
                        </li>
                        <li className={currentStep === 4 ? 'is-active' : ''}>
                            Finish
                        </li>
                    </ul>
                    <br />
                    <br />
                    {currentStep < 4 && <button onClick={nextStep}>Next Step</button>}
                </div>
            </div>
            <div className="main-forms">
                {currentStep === 1 ? <JobPosting /> : <Candidate />}
            </div>
        </div>
    );
}

export default AddJob;
