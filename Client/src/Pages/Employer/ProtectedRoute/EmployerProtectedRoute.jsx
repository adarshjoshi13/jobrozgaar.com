import React from 'react'
import EmployerAuth from '../../../API/Employer/Employer.auth'
import  { useState, useEffect } from "react";
import { Loader } from '../../../Components/export';
import { useNavigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

function EmployerProtectedRoute({CMP,Dashboard}) {

    const [isAuth,SetIsAuth] = useState(false)
    const [loader,Setloader] = useState(false);
    const [ProfileCompleate,SetProfileCompleate] = useState()
    let navigate = useNavigate();
    useEffect(()=>{
        (async ()=>{
            Setloader(true)
          const result = await EmployerAuth.VerifyAuth();
          if(result.status === 200){
            // console.log('yel bhai',result.data)
            Setloader(false)
            SetIsAuth(true)
            SetProfileCompleate(result.data.ProfileCompleateness)
          }
         else{
            Setloader(false)
           SetIsAuth(false)
           toast.error('Please login before  accessing this page!')
           navigate('/employer-login')
         }
        })()
      },[])
      if(loader){
    return <Loader style={{ width: '100%',
    height: '80vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
      }

     

      if(isAuth){
        if(Dashboard){
            if(ProfileCompleate === 100){
                return CMP
            }
            else{
                navigate('/employer-Company-Details')
                toast.error('Please fill your details before  accessing this page!')
            }
        }
        else{
            return CMP
        }
      }
   

}

export default EmployerProtectedRoute