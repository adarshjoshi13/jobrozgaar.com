import React from 'react'
import "./MyJob.css"
import { EmployeNav, ProfileCard } from '../../export'

function MyJob() {
  return (
    <>
      <EmployeNav />
      <ProfileCard />
      <div className="container my-job-box">
        <h2>My Jobs</h2>
        <div className="row mb-3 justify-content-between">
          <div className="col-md-2">
            <img src="/Utility/myjob.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob1.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob2.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob3.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob4.png" alt="" />
          </div>
        </div>
        <div className="container-sm sider-man-card ">
          <div className="row">
            <div className="col-md-8">
              <div className="empty-text h-100 w-100 d-flex text-center flex-column justify-content-between">
                
                <h2>You have no Recommended Jobs.</h2>
                <button >View Jobs</button>
              </div>
            </div>
            <div className="col-md-4 side-man">
              <img src="/Utility/8.png" alt="" />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default MyJob