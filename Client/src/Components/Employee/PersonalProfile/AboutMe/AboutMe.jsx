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
          const result = await employee.getintialdata();
          if(result.status === 200){
            console.log('yel bhai',result.data)
            setFormData({...result.data})
          }
         else{
           toast.error("erro fetching data")
         }
        })()
      },[])
 const AboutMe = (
  (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).AboutMe ?? null
)

    return (
        <div className="p-2 container d-flex">
            <div className="row w-100">
                <div className="personal-cover col-md-3 d-flex justify-content-start ">
                    <div className="image-cover-personal d-flex justify-content-center align-items-center flex-wrap">
                        <img src="/Utility/18.png" alt="" />
                        <h4>About Me</h4>
                    </div>
                </div>
                <div className="col-md-7">
                    <p className="p-1 pro-para">
                      {AboutMe}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe