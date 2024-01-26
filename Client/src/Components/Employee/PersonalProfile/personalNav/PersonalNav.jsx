import React from 'react'
import "./personalNav.css"
import { Link } from 'react-router-dom'
import ButtonEdit from '../ButtonEdit/ButtonEdit'

function PersonalNav() {
  return (
    <nav className="dash-nav navbar navbar-expand-lg ">
    <div className="container">
        <Link className="navbar-brand upper-nav" to="/">
            <img src="/Utility/personal.png" alt="Your Logo" />
        </Link>
        <Link className="navbar-brand">
            <ButtonEdit/>
        </Link>
    </div>
</nav>
  )
}

export default PersonalNav