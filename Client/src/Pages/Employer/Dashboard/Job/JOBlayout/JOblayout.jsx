import React from 'react'
import { Buttons } from '../../../../../Components/export'

function JOblayout({ children, navtag,AllData }) {
  console.log('propsDrilling',AllData)
  const btns = [

    {
      title: "Add job",
      link: '/employer-starter-Dashboard/Add-job',
      color: " #808080"
    }
    ,
    {
      title: "View All Job",
      link: '/employer-starter-Dashboard/view-job',
      color: " #808080"
    }
  ]
  return (
    <div className="container p-0">
      <div className="nav-tab-employer-dashboard-job d-flex gap-2">
        {btns.map((i, index) => {
          return (i.title === navtag ? <Buttons to={i.link} title={i.title} color={'#8FAA46'} key={index} /> : <Buttons to={i.link} title={i.title} color={i.color} key={index} />)
        })}
      </div>
      {React.cloneElement(children, { AllData:  AllData })}
    </div>
  )
}

export default JOblayout