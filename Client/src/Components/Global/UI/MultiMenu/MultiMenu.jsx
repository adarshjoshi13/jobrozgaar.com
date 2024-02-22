import React, { useEffect, useState } from 'react';


const MultiMenu = ({ margin, selectinput, name, value, handleChange, options }) => {
  const [render,SetRender] = useState(0)
  useEffect(() => {
    SetRender(render + 1);
    console.log('render',render)
    // Initialize multi-select-tag or use any other provided functionality
    if(render === 1){
      const multiSelect = new MultiSelectTag('custom-select-is');
    }
    // Replace '.custom-select' with the appropriate selector for your select element
  }, []);
 

  return (
    <> 
      <div className="cover-of-select" style={margin}>
        {/* <FaAngleDown className='arrow-down-icon' style={{ color: "black" }} />  */}
        <select className={`form-control`} id='custom-select-is' style={selectinput} name={name} onChange={handleChange} value={value} multiple>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MultiMenu; 
