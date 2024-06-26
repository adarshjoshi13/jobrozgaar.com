import React from 'react'
import "./personalNav.css"
import { Link } from 'react-router-dom'
import ButtonEdit from '../ButtonEdit/ButtonEdit'

function PersonalNav({link,hideOrShow,img,id,bigSizeImg ,onClick}) {
  return (
    
    <div className="container p-0">
        <Link className="navbar-brand upper-nav">
          {hideOrShow?null:  <img className={bigSizeImg} id={id} src={img}  />}
        </Link>
     {
      hideOrShow ? (   <Link className="navbar-brand" to={link}>
      <ButtonEdit onClick={onClick}/>
  </Link>):null
     }
    </div>

  )
}

PersonalNav.defaultProps = {
  hideOrShow:true
}

export default PersonalNav