import React, { useState } from 'react';
import {JobPosting,Candidate} from '../../../../../Pages/export'

function AddJob() {
    const [current,Setcurrent] = useState(1)
  return (
   <div className="container">
    <div className="progresbar">
        <h1>progres Bar</h1>
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