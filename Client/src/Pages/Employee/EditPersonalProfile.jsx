import React from 'react'
import { EditPersonalprofile} from '../../Components/export'
function EditPersonalProfile() {
  return (
  <div className="container d-flex  flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="employee-nav-tab">
    {/* <Employeetab active={'Personal Profile'}/> */}
    </div>
     <div className="container">
     <EditPersonalprofile redirect={'/work-experience'}/>
   </div>
  </div>
  )
}

export default EditPersonalProfile