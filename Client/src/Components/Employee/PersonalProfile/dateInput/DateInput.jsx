import React from 'react';
import "./DateInput.css";

function DateInput({ label1, label2, placeholder1, placeholder2 ,type,type2 }) {
  return (
    <div className="container date-input">
      <div className="row">
        <div className="col-md-2 d-flex align-items-center">
          <h5>{label1}</h5>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-start align-items-center">
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <input style={{width:"100%"}} type={type} placeholder={placeholder1} />
            </div>
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h5 style={{ margin: "7px" }}>{label2}</h5>
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <input  style={{width:"100%"}} type={type2} placeholder={placeholder2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateInput;
