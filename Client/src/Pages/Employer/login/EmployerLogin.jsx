import React from 'react'
import Login from '../../Login'
import EmployerAuth from '../../../API/Employer/Employer.auth'

function EmployerLogin() {
    console.log('lalal')
  return (
   <Login login={EmployerAuth} redircet={'/employer-Company-Details'}/>
  )
}

export default EmployerLogin