import React from 'react';
import "./SelectInput.css"
import { FaAngleDown } from "react-icons/fa";   
const SelectInput = ({margin, selectinput, name, value, handleChange, options }) => {
  return (
    <> 
    <div className="cover-of-select" style={margin} >
    <FaAngleDown className='arrow-down-icon' style={{color:"black"}} /> 
       <select className={`form-control raja `} style={selectinput} name={name}   onChange={handleChange} value={value}>
   
       
      {options.map((option, index) => (
        
        <option  key={index} value={option.value}>
        
          {option.label}
        </option>
      ))}
      
    </select>
    </div>
   
  
    </>
    
  );
};

export default SelectInput;