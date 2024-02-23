import React from 'react'
// import Login from '../../Login'
import auth from '../../../API/Authentiocaion'
import SignIn from '../../SignIn/SignIn'

function EmployeeLogin() {
  // console.log(auth.login)
 
  return (
  //  <Login login={auth} redircet={'/employe-profile-compleateness'}/>
  <SignIn login={auth} redircet={'/employe-profile-compleateness'} backurl={'/find-a-job'}/>
  )
}

export default EmployeeLogin