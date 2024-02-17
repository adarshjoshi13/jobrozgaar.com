import React from 'react'
import { PersonalDetails, Employeetab } from '../../Components/export'
function PersonalProfile() {
  return (
    <div className="container d-flex  flex-wrap flex-lg-nowrap flex-md-nowrap">
      <div className="employee-nav-tab">
        {/* <Employeetab active={'Personal Profile'}/> */}
      </div>
      <div className="container p-0">
        <PersonalDetails />
      </div>
    </div>
  )
}

export default PersonalProfile