import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaAddressCard, FaUserPlus, FaDesktop } from 'react-icons/fa';
import "./ApplyProcessArea.css"

const ApplyProcessArea = () => {
  return (
    <div className="apply-process-area apply-bg pt-50 pb-50" style={{ background: '#cddbd4' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-process text-center">
              <h5 className="rojgarh2">Manpower</h5>
              <h5 className="rojgarh2"> outsourcing</h5>
              <div className="process-ion">
                <span><FaUsers /></span>
              </div>
              <div className="process-cap">
                <p className="rojgarp">Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-process text-center">
              <h5 className="rojgarh2">Payroll </h5>
              <h5 className="rojgarh2">outsourcing</h5>
              <div className="process-ion">
                <span><FaAddressCard /></span>
              </div>
              <div className="process-cap">
                <p className="rojgarp">Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-process text-center">
              <h5 className="rojgarh2">Sataffing & </h5>
              <h5 className="rojgarh2">Placement</h5>
              <div className="process-ion">
                <span><FaUserPlus /></span>
              </div>
              <div className="process-cap">
                <p className="rojgarp">Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-process text-center">
              <h5 className="rojgarh2">Skill </h5>
              <h5 className="rojgarh2">Development</h5>
              <div className="process-ion">
                <span><FaDesktop /></span>
              </div>
              <div className="process-cap">
                <p className="rojgarp">Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyProcessArea;
