import React from 'react'
import './Button.css'

function Button({title,onClick,type}) {
  return (
  <button type={type} onClick={onClick} className='submit-btn-main'>{title}</button>
  )
}

export default Button