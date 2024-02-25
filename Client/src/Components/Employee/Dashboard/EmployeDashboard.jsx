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

          <button className="continue-button"><Link to={'/Personal-profile'}>
          Continue
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
            </svg>
            </Link>
          </button>



        ) : (
          <button className="continue-button"> <Link to={'/Dashboard/jobs/my-jobs'}>
          Go to Dashboard
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
            </svg>
            </Link>
          </button>


        )}
      </div>

    </div>
  );
}

export default EmployeDash_Board;
