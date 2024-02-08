import React from 'react';
import "./DateInput.css";

function DateInput({ label1, label2, placeholder1, placeholder2 ,type,type2,onchange,onblur,value1,name1,name2,value2,hideLable,hidfeild }) {
  return (
    <div className="container date-input">
      <div className="row">
        <div className="col-md-2 d-flex align-items-center">
          <h5 className={`lable ${hideLable?"hide":''}`}>{label1}</h5>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 d-flex p-0 justify-content-start align-items-center">
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <input style={{width:"100%"}} type={type} placeholder={placeholder1} onChange={onchange} onBlur={onblur} value={value1} name={name1} />
            </div>
            <div className={`col-md-6 d-flex p-0 justify-content-start align-items-center input2 ${hidfeild?"hide":""}`}>
              <h5 style={{ margin: "7px" }} className='lable'>{label2}</h5>
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <input  style={{width:"100%"}} type={type2} placeholder={placeholder2} onChange={onchange} onBlur={onblur} value={value2} name={name2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateInput;
