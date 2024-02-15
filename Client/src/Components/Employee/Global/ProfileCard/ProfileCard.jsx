import React, { useState } from 'react'
import { FaCloudDownloadAlt, FaCamera, FaShareAlt, } from "react-icons/fa";
import "./ProfileCards.css"
import employee from '../../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../../../export';

function ProfileCard({ email, proifePic, number, compleateProfile, name, location, extraData, utlityFunction }) {
  const [sliderValue, setSliderValue] = useState(10);
  const [loader, setloader] = useState(false)
  console.log("chut ka marij", utlityFunction)

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const ChangeImg = async (e) => {
    let image = e.target.files[0]
    console.log('image dekh le bhai', image);

    setloader(true)
    const result = await employee.ProfilePic(image)
    console.log("this is the result", result)

    if (result === null) {
      setloader(false)
      toast.warn("something went wrong please try again")
    }

    if (result.status === 200) {
      setloader(false);
      utlityFunction()
      toast.success(result.data.message)
    }

    else {
      setloader(false);
      toast.error(result.data.message)
    }


  }



  // console.log("yah se calcuation",extraData)
  return (
    <div className="container mt-4 mb-4 border">
      <div className="row">
        <div className="col-md-6">
          <div className="profile-cover-dash d-flex justify-content-center align-items-center flex-column">
            <div className='upper-box-profile'>
              <div className='profile-dash'>
                <div className="profile-img-box">
                  <div className="profile-image-container">
                    {loader ? <Loader /> : <img src={proifePic ? proifePic : "/Utility/profile.png"} alt="profile" className='img-fluid  ' id='profile-pic-img' />}
                  </div>
                  <div className="buttons-profile mb-2">
                    <button className="three-btn ">
                    <FaCloudDownloadAlt />
                    </button>

                    <button className="three-btn ">
                    <FaCamera /><input
                        type="file"
                        accept="images"
                        onChange={ChangeImg}

                      />
                    </button>
                    <button className="three-btn ">
                    <FaShareAlt />
                    </button>
                  </div>
                  <h4>{name}</h4>
                  <p className='success'>Verified</p>
                </div>
              </div>
            </div>
            <div className="dash-para flex-column w-100 d-flex justify-content-center align-items-center">
              <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                <p>Email ID: {email}</p>
              </div>
              <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                <p>Phone:{number}</p>
              </div>
              <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                <p>Location:{location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 border-hai">
          <div className="progress-bar-dash h-100 w-100 d-flex justify-content-evenly flex-column">
            <h4>Profile Completeness</h4>
            <div className="pro ">
              <input
                id="myRange"
                className="slider-prog"
                value={compleateProfile}
                max="100"
                min="0"
                type="range"

                readOnly
                style={{
                  border: "2px solid black", height: "18px", background: `linear-gradient(90deg, #F5821F ${compleateProfile}%, #ffff ${compleateProfile}%)`
                }}
              />
              <h4 style={{ float: "right" }}>{compleateProfile}%</h4>
            </div>
            <p style={{ color: `${compleateProfile === 100 ? "green" : "red"}` }}>{compleateProfile === 100 ? "Profile compleated" : "Add the missing information to complete the profile"}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

ProfileCard.defaultProps = {
  email: "", proifePic: "", number: "", compleateProfile: "", name: "", location: ""
}

export default ProfileCard