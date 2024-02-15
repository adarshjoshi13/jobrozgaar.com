import React from 'react'
import './Button.css'
import Loader from '../loader/Loader'

function Button({title,onClick,type,loader}) {
  return (
  <button type={type} onClick={onClick} className='submit-btn-main mb-3'>{loader?<Loader/>:title}</button>
  )
}

export default Button