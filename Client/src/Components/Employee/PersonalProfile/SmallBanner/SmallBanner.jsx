import React from 'react';
import "./SmallBanner.css";

function SmallBanner({ personalImage, workImage, eduImage }) {
  return (
    <div className="container work-ex p-3">
      <div className="row w-100">
        <div className="col-md-3">
          <img src={personalImage} alt="Personal Image" />
        </div>
        <div className="col-md-7 d-flex justify-content-evenly align-items-center">
          <img src={workImage} alt="Work Image" />
          <img src={eduImage} alt="Education Image" />
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
