import React, { useState } from 'react';
import { JobPosting, Candidate } from '../../../../../Pages/export';
import './AddJob.css';

function AddJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [Jobdetails,SetJobdetails] = useState({});
//   console.log('betet',Jobdetails)
const [zIndex, setZIndex] = useState(56);


  const handleNextStep = () => {
    setCurrentStep(2);
    setZIndex(54)
  };

  function GetJobDetails(data){
    SetJobdetails(data)
    handleNextStep()
    
  }

  return (
    <div className="container p-0">
      <div className="progresbar">
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li className={currentStep === 1 ? 'is-active' : ''}>
              Job Detail
              <div className="progress-bar progress-bar--success">
                <div className={`progress-bar__bar ${currentStep > 1 ? 'is-complete' : ''}`}></div>
              </div>
            </li>
            <li className={currentStep === 2 ? 'is-active' : ''}>
              Requriment
            </li>
          </ul>
          <br />
          <br />
          {/* <button onClick={handleNextStep}>Next Step</button> */}
        </div>
      </div>
      <div className="main-forms">
        {/* {currentStep === 1 ? <JobPosting /> : <Candidate />} */}
        <div className="job-posting-cards" style={{zIndex:zIndex}}>
          <JobPosting sendJobdetails={GetJobDetails}/>
        </div>

        <div className="candidate-cards-si">
          <Candidate jobdetails={Jobdetails} />
        </div>
      </div>
    </div>
  );
}

export default AddJob;
