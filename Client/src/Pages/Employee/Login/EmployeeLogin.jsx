import React from 'react'
import Login from '../../Login'
import auth from '../../../API/Authentiocaion'

function EmployeeLogin() {
  // console.log(auth.login)
 
  return (
   <Login login={auth} redircet={'/employe-profile-compleateness'}/>
  )
}

export default EmployeeLogin