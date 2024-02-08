import React from 'react'
import { EditPersonalprofile } from '../../Components/export'
function EditPersonalProfile() {
  return (
    <div className="container d-flex p-0 flex-wrap flex-lg-nowrap flex-md-nowrap">
      
      <div className="container  ">
        <EditPersonalprofile redirect={'/work-experience'} />
      </div>
    </div>
  )
}

export default EditPersonalProfile