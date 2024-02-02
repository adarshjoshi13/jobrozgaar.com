import React from 'react'
import Buttons from '../Buttons/Buttons'
import './tab.css'

function Employeetab() {
  return (
  
    <div className="d-flex flex-md-column flex-lg-column flex-xs-row flex-sm-wrap flex-xs-wrap flex-sm-row flex-wrap button-home-dash home-dash-nav">
    <Buttons to='/my-jobs' color={"#3C6271"} title={"My Jobs"} />
    <Buttons to='/personal-profile' color={"#87b724"} title={"Personal Profile"} />
    <Buttons to='/work-experience' color={"#3C6271"} title={"Work Experience"} />
    <Buttons to='/education' color={"#87b724"} title={"Education"} />
    <Buttons to='/offer-letter' color={"#3C6271"} title={"Offer Letter"} />
    <Buttons to='setting' color={"#87b724"} title={"Setting"} />
    <Buttons to='tips-support' color={"#3C6271"} title={"Tips & Support"} />
  </div>
  
  
  )
}

export default Employeetab