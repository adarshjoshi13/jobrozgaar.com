import React, { useState } from 'react';
import { JobPosting, Candidate } from '../../../../../Pages/export';
import './AddJob.css';

function AddJob() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep < 4 ? prevStep + 1 : prevStep);
  };

  return (
    <div className="container p-0">
      <div className="progresbar">
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li className={currentStep === 1 ? 'is-active' : ''}>
              Start
              <div className="progress-bar progress-bar--success">
                <div className={`progress-bar__bar ${currentStep > 1 ? 'is-complete' : ''}`}></div>
              </div>
            </li>
            <li className={currentStep === 4 ? 'is-active' : ''}>
              Finish
            </li>
          </ul>
          <br />
          <br />
          <button onClick={handleNextStep} disabled={currentStep === 4}>Next Step</button>
        </div>
      </div>
      <div className="main-forms">
        {currentStep === 1 ? <JobPosting /> : <Candidate />}
      </div>
    </div>
  );
}

// testing

export default AddJob;
