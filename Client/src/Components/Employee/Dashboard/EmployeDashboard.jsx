import React, { useState,useEffect } from 'react';
import "./EmployeDashboard.css";
import { Link } from 'react-router-dom';
import Buttons from '../Global/Buttons/Buttons';

import ProfileCard from '../Global/ProfileCard/ProfileCard';
import EmployeNav from '../Global/EmployeNav/EmployeNav';
import Employeetab from '../Global/Employee-tab/Employee-tab';
// import { useState,useEffect } from 'react';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';

function EmployeDash_Board() {
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          const result = await employee.getintialdata();
          if(result.status === 200){
            console.log('yel bhai',result.data)
            setFormData({...result.data})
            const result2 = await employee.getPersonalProfile()
            if(result2.status === 200){
                setFormData((prev)=>{
                  return  {...prev,Location:result2.data.data?.CurrentAddress || ""
                    }
                })
            }
          }
         else{
           toast.error("erro fetching data")
         }
        })()
      },[])
      console.log("formdata",formData)
     
      if(loader){
        return(
          <div className="contaienr">
            <div className="row">
                <div className="col-md-12">
                <Loader/>
                </div>
            </div>
          </div>
        )
      }
      


    return (
        <div className='employed-dashbaord'>
            {/* <EmployeNav /> */}
            <Employeetab/>

            <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
} number={formData.mobile || ""} name={formData.firstName
} />
        </div>
    );
}

export default EmployeDash_Board;
