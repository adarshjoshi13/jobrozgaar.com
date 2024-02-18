import React from 'react';
import "./SingleTitleBar.css"
import SelectInput from '../Select Input/SelectInput'; // Import the SelectInput component
import { FaAngleDown } from "react-icons/fa"; // Assuming this is already imported

function SingleTitleBar({ title,  onChange,  value, name,margin, selectinput, options }) {
    return (
        <div className="container SingleTitleBar">
            <div className="row">
                <div className="col-md-2 p-0 d-flex align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col-md-10">
                    <div className="row">

                        <div className="col-md-10 p-0 d-flex justify-contant-center align-items-center">
                            <div>
                                <img src="/Utility/check.png" alt="" />
                            </div>
                            {/* Replace the input with the SelectInput component */}
                            <SelectInput
                                name={name}
                                value={value}
                                handleChange={onChange}
                                margin={margin}
                                selectinput={selectinput}
                                options={options}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTitleBar;
