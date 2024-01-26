import React from 'react'
import "./EmployeNav.css";
import { Link } from 'react-router-dom'

function EmployeNav() {
  return (
    <nav className="dash-nav navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <img src="/Utility/logo.png" alt="Your Logo" />
        </Link>
    </div>
</nav>
  )
}

export default EmployeNav