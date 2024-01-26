import React,{useState} from 'react'
import { FaCloudDownloadAlt, FaCamera, FaShareAlt } from "react-icons/fa";
import "./ProfileCards.css"

function ProfileCard() {
    const [sliderValue, setSliderValue] = useState(67);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };
  return (
    <div className="container mt-4 mb-4 p-4 border">
    <div className="row">
        <div className="col-md-6">
            <div className="profile-cover-dash d-flex justify-content-center align-items-center flex-column">
                <div className='upper-box-profile'>
                    <div className='profile-dash'>
                        <div className="profile-img-box">
                            <img src="/Utility/profile.png" alt="profile" />
                            <div className="buttons-profile">
                                <button><FaCloudDownloadAlt /></button>
                                <button><FaCamera /></button>
                                <button><FaShareAlt /></button>
                            </div>
                            <h3>VIPUL</h3>
                        </div>
                    </div>
                </div>
                <div className="dash-para flex-column w-100 d-flex justify-content-center align-items-center">
                    <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                        <p>Email ID: vipulsemwal124@gmail.com</p>
                        <p>Verify</p>
                        <p>Edit</p>
                    </div>
                    <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                        <p>Phone: 8178710398</p>
                        <p className='success'>Verified</p>
                    </div>
                    <div className="upper-text w-100 d-flex justify-content-between align-items-center">
                        <p>Location: Azadpur, Delhi, India</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 border-hai">
            <div className="progress-bar-dash h-100 w-100 d-flex justify-content-evenly flex-column">
                <h3>Profile Completeness</h3>
                <div className="pro ">
                    <input
                        id="myRange"
                        className="slider-prog"
                        value={sliderValue}
                        max="100"
                        min="0"
                        type="range"
                        onChange={handleSliderChange}
                        style={{
                          border:"2px solid black", height:"18px",  background: `linear-gradient(90deg, #F5821F ${sliderValue}%, #ffff ${sliderValue}%)`
                        }}
                    />
                    <h3 style={{ float: "right" }}>{sliderValue}%</h3>
                </div>
               <p>Add the missing information to <br/>
                    complete the profile</p>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default ProfileCard