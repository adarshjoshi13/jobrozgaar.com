import React from 'react'
import "./AboutMe.css"
import { Loader } from '../../../export';
import employee from '../../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState} from 'react';
function AboutMe() {
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          Setloader(true)
          const result = await employee.getintialdata();
          if(result.status === 200){
            console.log('yel bhai',result.data)
            setFormData({...result.data})
            Setloader(false)
          }
         else{
           toast.error("erro fetching data")
           Setloader(false)
         }
        })()
      },[])
 const AboutMe = (
  (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).AboutMe ?? null
)

if(loader){
  return <Loader style={{ width: '100vw',
  height: '60vh', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',}}/>
}

    return (
        <div className="p-2 container d-flex">
            <div className="row w-100">
                <div className="personal-cover col-md-3 d-flex justify-content-start ">
                    <div className="image-cover-personal d-flex justify-content-center align-items-center flex-wrap">
                        <img src="/Utility/18.png" alt="" />
                        <h5>About Me</h5>
                    </div>
                </div>
                <div className="col-md-7">
                    <p className="p-1 pro-para m-0">
                      {AboutMe}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe