import React from 'react'
import { EditPersonalprofile,Employeetab } from '../../Components/export'
function EditPersonalProfile() {
  return (
  <div className="container d-flex  flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="employee-nav-tab">
    {/* <Employeetab active={'Personal Profile'}/> */}
    </div>
     <div className="container">
     <EditPersonalprofile/>
   </div>
  </div>
  )
}

export default EditPersonalProfile