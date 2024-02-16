import React from 'react'
import "./ButtonEdit.css"

function ButtonEdit({onClick}) {
  return (
    <button onClick={onClick} className='image-btns'><strong>Edit Me</strong><img src="/Utility/edit.png" alt="Your Logo" /></button>
  )
}

export default ButtonEdit