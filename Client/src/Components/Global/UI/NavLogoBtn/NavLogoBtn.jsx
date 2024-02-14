import React from 'react'
import "./NavLogoBtn.css"
function NavLogoBtn({url,topImg}) {
  return (
    <div className="col-md-12 mt-2 mb-3">
        <div className={topImg} id='top-img'>
            <img className='img-fluid' src={url}  />
        </div>
        
    </div>
  )
}

export default NavLogoBtn