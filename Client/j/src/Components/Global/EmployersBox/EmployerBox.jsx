import React from 'react';
import { Link } from 'react-router-dom';
import "./EmployerBox.css";

const EmployerBox = ({ imageUrl, title, description }) => {
  return (
    <div className="whole-wrap">
      <div className="container box_1170">
        <div className="section-top-border">
          <h3 className="mb-30">{title}</h3>
          <div className="row">
            <div className="col-md-2">
              <img src={imageUrl} alt="" className="jobsimg" />
            </div>
            <div className="col-md-10 mt-sm-20">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerBox;
