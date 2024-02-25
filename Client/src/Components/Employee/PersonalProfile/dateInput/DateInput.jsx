import React from 'react';
import "./DateInput.css";
import { SelectInput } from '../../../export';
import Errofeild from '../../../Global/UI/Erorrspan/Errofeild';

function DateInput({ label1, label2, placeholder1,type,onchange,onblur,value1,name1,name2,value2,hideLable,hidfeild,err1,err2 }) {
  const States = [
    { value: 'option1', label: 'Marital Status' },
    { value: 'Married', label: 'Married' },
    { value: 'Single', label: 'Single' },
    
    // Add more languages as needed
];


const margin ={
  margin:"9px"
}


const selectinput ={
  fontSize:"13px",
  padding:"8px"
}
  return (
    <div className="container date-input">
      <div className="row">
        <div className="col-md-2 p-0 d-flex align-items-center">
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
              <div  className="h5-cover">
                <h5 style={{ margin: "4px" }} className='lable'>{label2}</h5>
              </div>
              
              <div className='d-flex justify-content-center align-items-center w-100'>
                <img style={{width:"30px",height:"30px"}} src="/Utility/check.png" alt="" />
                 {/* <input  style={{width:"100%"}} type={type2} placeholder={placeholder2} onChange={onchange} onBlur={onblur} value={value2} name={name2} /> */}
                 <SelectInput  handleChange={onchange} onBlur={onblur} value={value2} name={name2}
                 options={States} margin={margin} selectinput={selectinput}/>
              </div>
              
             
            </div>
            <Errofeild error={err1}/>
            <Errofeild error={err2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateInput;
