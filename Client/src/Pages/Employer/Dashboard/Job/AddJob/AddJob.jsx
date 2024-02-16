import React, { useState } from 'react';
import {JobPosting,Candidate} from '../../../../../Pages/export'
import "./AddJob.css"

function AddJob() {
    const [current,Setcurrent] = useState(0);

    const [step, setStep] = useState('step1');

    function next() {
      const step1 = document.getElementById('step-1');
      const step2 = document.getElementById('step-2');
      const step3 = document.getElementById('step-3');
      const step4 = document.getElementById('step-4');
  
      if (step === 'step1') {
        setStep('step2');
        step1.classList.remove("is-active");
        step1.querySelector('.progress-bar__bar').style.transform = 'translateX(100%)';
        step1.querySelector('.progress-bar__bar').style.webkitTransform = 'translateX(100%)';
        step2.classList.add("is-active");
      } else if (step === 'step2') {
        setStep('step3');
        step2.classList.remove("is-active");
        step2.querySelector('.progress-bar__bar').style.transform = 'translateX(100%)';
        step2.querySelector('.progress-bar__bar').style.webkitTransform = 'translateX(100%)';
        step3.classList.add("is-active"); 
      } else if (step === 'step3') {
        setStep('step4');
        step3.classList.remove("is-active");
        step3.querySelector('.progress-bar__bar').style.webkitTransform = 'translateX(100%)';
        step4.classList.add("is-active");
      } else if (step === 'step4') {
        setStep('complete');
        step4.classList.remove("is-active");
      }
      Setcurrent(1)
    }
  return (
   <div className="container p-0">
    <div className="progresbar">
    <div className="container-fluid">
      <br /><br />
      <ul className="list-unstyled multi-steps">
        <li id="step-1" className={step === 'step1' ? 'is-active' : ''}>
          Start
          <div className="progress-bar progress-bar--success">
            <div className="progress-bar__bar"></div>
          </div>
        </li>
        
        <li id="step-4" className={step === 'step4' ? 'is-active' : ''}>
          Finish
          
        </li>
      </ul>
      <br />
      <br />
      <button onClick={next}>Next Step</button>
    </div>
    </div>
    <div className="main-forms">
       {
        current === 0 ? <JobPosting/>:<Candidate/>
       }
    </div>
   </div>
  )
};

export default AddJob;