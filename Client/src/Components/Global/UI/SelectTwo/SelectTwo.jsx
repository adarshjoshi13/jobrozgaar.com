import React from 'react';
import "./SelectTwo.css";

function SelectTwo({ label1, label2, onchange, value1, name1, name2, value2, hideLable, hidfeild, options, options1 }) {
  return (
    <div className="container date-input">
      <div className="row">
        <div className="col-md-2 p-0 d-flex align-items-center">
          <h5 className={`lable ${hideLable ? "hide" : ''}`}>{label1}</h5>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className={`col-md-6 d-flex p-0 justify-content-start align-items-center input2 ${hidfeild ? "hide" : ""}`}>
             
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <div className="col-md-8">
                {/* Check if options is defined before mapping */}
                {options && options.length > 0 && (
                  <select className="form-control mb-2 select-inputs" name={name1} onChange={onchange} value={value1}>
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div className={`col-md-6 d-flex p-0 justify-content-start align-items-center input2 ${hidfeild ? "hide" : ""}`}>
              <h5 style={{ margin: "7px" }} className='lable'>{label2}</h5>
              <div>
                <img src="/Utility/check.png" alt="" />
              </div>
              <div className="col-md-8">
                {/* Check if options1 is defined before mapping */}
                {options1 && options1.length > 0 && (
                  <select className="form-control mb-2 select-inputs" name={name2} onChange={onchange} value={value2}>
                    {options1.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTwo;
