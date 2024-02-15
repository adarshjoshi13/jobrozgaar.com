import React, { useState } from 'react'
import './EmployerDashboard.css'
import { ProfileCard,Loader, } from '../../../../Components/export'

function EmployerDashboard({children}) {
  const [loader,Setloader] = useState(false)




  if(loader){
    return <Loader style={{ width: '100vw',
    height: '60vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
  }
  return (
   <div className="container">
     <ProfileCard/>
   {/* Tab for employer */}
    {children}
   </div>
  )
}

export default EmployerDashboard