import React from 'react'
import { EditPersonalprofile} from '../../../../Components/export'

function DashboardPeronalProfile() {
  return (
    <div className="container d-flex  flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="employee-nav-tab">
    {/* <Employeetab active={'Personal Profile'}/> */}
    </div>
     <div className="container">
     <EditPersonalprofile redirect={'/Dashboard/personal-profile'}/>
   </div>
  </div>
  )
}

export default DashboardPeronalProfile