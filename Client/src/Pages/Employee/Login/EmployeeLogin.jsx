import React from 'react'
import Login from '../../Login'
import auth from '../../../API/Authentiocaion'

function EmployeeLogin() {
  // console.log(auth.login)
 
  return (
   <Login login={auth} redircet={'/employed-dashboard'}/>
  )
}

export default EmployeeLogin