import React from 'react';
import "./SmallBanner.css";

function SmallBanner({ personalImage, workImage, eduImage }) {
  return (
    <div className="container work-ex p-3 d-flex">
      <div className=" w-100  d-flex  justify-content-between align-items-center">
        <div className="col-md-3">
          <img src={personalImage} alt="cureent page img" className='' />
        </div>
        <div className="col-md-9 d-flex justify-content-evenly align-items-center showneximg">
          <img  src={workImage} alt=""  className='small-imgs img-fluid' />
          <img src={eduImage} alt=""   className='small-imgs img-fluid'/>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
