import React, { useState, useEffect } from 'react';
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
  const [loader, Setloader] = useState(false);
  const [formData, setFormData] = useState({})
  useEffect(() => {
    (async () => {
      Setloader(true)
      const result = await employee.getintialdata();
      if (result.status === 200) {
        Setloader(false)
        console.log('yel bhai', result.data)
        setFormData({ ...result.data })
      }
      else {
        Setloader(false)
        toast.error("erro fetching data")
      }
      Setloader(false)
    })()
  }, [])
  const currentAddress = (
    (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).CurrentAddress ?? null
  )
  const profileCompleate = formData?.ProfileCompleate
  console.log("formdata", profileCompleate)

  // console.log('araha hain',currentAddress)

  if (loader) {
    return <Loader style={{
      width: '100vw',
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} />
  }



  return (
    <div className='employed-dashbaord'>
      {/* <EmployeNav /> */}


      <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
      } number={formData.mobile || ""} name={formData.firstName
      } location={currentAddress} compleateProfile={profileCompleate} extraData={formData} />
      <div className="show-info ">
        {profileCompleate < 100 ? (

          <button className='continue-button'> <Link to={'/Personal-profile'}>
    <span>Continue</span>
    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
    </Link>
</button>

         
        ) : (
          <button className='continue-button'> <Link to={'/Dashboard/personal-profile'}>
    <span>Go to Dashboard</span>
    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
    </Link>
</button>

        
        )}
      </div>

    </div>
  );
}

export default EmployeDash_Board;
