import React from 'react'
import Login from '../../Login'
import SignIn from '../../SignIn/SignIn'
import EmployerAuth from '../../../API/Employer/Employer.auth'

function EmployerLogin() {
    // console.log('lalal')
  return (
  //  <Login login={EmployerAuth} redircet={'/employer-Company-Details'}/>
  <SignIn login={EmployerAuth} redircet={'/employer-Company-Details'} backurl={'/find-a-talent'} cookie={'employer'}/>
  )
}

export default EmployerLogin