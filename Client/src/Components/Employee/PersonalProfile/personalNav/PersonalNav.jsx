import React from 'react'
import "./personalNav.css"
import { Link } from 'react-router-dom'
import ButtonEdit from '../ButtonEdit/ButtonEdit'

function PersonalNav({link,hideOrShow,img}) {
  return (
    <nav className="dash-nav navbar navbar-expand-lg ">
    <div className="container">
        <Link className="navbar-brand upper-nav">
            <img src={img} alt="Your Logo" />
        </Link>
     {
      hideOrShow ? (   <Link className="navbar-brand" to={link}>
      <ButtonEdit/>
  </Link>):null
     }
    </div>
</nav>
  )
}

PersonalNav.defaultProps = {
  hideOrShow:true
}

export default PersonalNav