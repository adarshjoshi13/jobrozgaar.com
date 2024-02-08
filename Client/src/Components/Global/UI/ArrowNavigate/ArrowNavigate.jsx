import React from 'react'
import "./ArrowNavigate.css"
function ArrowNavigate({url}) {
  return (
    <div className="col-md-12  mb-3">
    <div className="row">
        <div className="col-md-3">
            <img className='offer' src={url} alt="" />
        </div>
    </div>
</div>
  )
}

export default ArrowNavigate