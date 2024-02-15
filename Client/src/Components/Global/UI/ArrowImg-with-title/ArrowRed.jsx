import React from 'react'
import "./ArrowRed.css"
import { PersonalNav } from '../../../export'
function ArrowRed({url, redtitle,bigSize}) {
  return (
    <div className="col-md-12 mini-nav d-flex align-content-center flex-wrap">
         <PersonalNav bigSizeImg={bigSize} hideOrShow={false} img={url}/> 
         <p className='m-0 d-flex align-items-center' style={{color:'red'}}>{redtitle}</p>
        </div>
  )
}

export default ArrowRed