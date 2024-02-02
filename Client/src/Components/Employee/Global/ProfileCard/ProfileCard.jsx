import React,{useState} from 'react'
import { FaCloudDownloadAlt, FaCamera, FaShareAlt } from "react-icons/fa";
import "./ProfileCards.css"

function ProfileCard({email,proifePic,number,compleateProfile,name,location}) {
    const [sliderValue, setSliderValue] = useState(10);

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
                         <div className="profile-image-container">
                         <img src={proifePic?proifePic:"/Utility/profile.png"} alt="profile" className='img-fluid  ' id='profile-pic-img' />
                         </div>
                            <div className="buttons-profile">
                                <button><FaCloudDownloadAlt /></button>
                                <button><FaCamera />
                                   <input
        type="file"
        accept="images"
    
      />
                                </button>
                                <button><FaShareAlt /></button>
                            </div>
                            <h3>{name}L</h3>
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
                        <p>Location:{Location}</p>
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
                        
                        readOnly
                        style={{
                          border:"2px solid black", height:"18px",  background: `linear-gradient(90deg, #F5821F ${sliderValue}%, #ffff ${sliderValue}%)`
                        }}
                    />
                    <h3 style={{ float: "right" }}>{sliderValue}%</h3>
                </div>
               <p>{compleateProfile === 100?"Profile compleated":"Add the missing information to complete the profile"}</p>
            </div>
            
        </div>
    </div>
</div>
  )
}

ProfileCard.defaultProps = {
    email:"",proifePic:"",number:"",compleateProfile:"",name:"",location:""
  }

export default ProfileCard