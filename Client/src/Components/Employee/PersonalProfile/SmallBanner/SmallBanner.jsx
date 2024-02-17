import React from 'react';
import "./SmallBanner.css";

function SmallBanner({ personalImage, workImage, eduImage }) {
  return (
    <div className="container work-ex p-0 mb-1 d-flex">
      <div className=" w-100  d-flex  gap-4    align-items-center">
        <div className="col-md-2">
          <img src={personalImage} alt="cureent page img" className='img-fluid arrow-img-ex' />
        </div>
        <div className="col-md-10 d-flex justify-content-start align-items-center showneximg">
        
           <img  src={workImage} alt=""  className='small-imgs img-fluid' />
       
        
         
          <img src={eduImage} alt=""   className='small-imgs img-fluid'/>
        
         
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
