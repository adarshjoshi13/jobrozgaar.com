import React, { useEffect, useState } from 'react';
import Select from 'react-select'; // Import the new multi-select component
import "./MultiMenu.css"

const MultiMenu = ({ margin, selectinput, name, value, handleChange, options }) => {
  // Remove the state for render count
  useEffect(() => {
    // No need for rendering logic here
  }, []);

  return (
    <div className="cover-of-select" style={margin}>
      <Select
        defaultValue={value} // Set default value
        isMulti
        name={name}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange} // Handle change event
      />
    </div>
  );
};

export default MultiMenu;
