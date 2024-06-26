import React, { useState ,useEffect} from 'react';
import { FaCloudDownloadAlt, FaCamera, FaShareAlt } from "react-icons/fa";
import "./ProfileCards.css";
import employee from '../../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Loader } from '../../../export';
import { Link } from 'react-router-dom';
import { PopUpCard } from '../../../../Pages/export';
import auth from '../../../../API/Authentiocaion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cookies from 'js-cookie'

function ProfileCard({ email, proifePic, number, compleateProfile, name, location, extraData, utlityFunction, UploadImg }) {
  const [Popup, setPopup] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [loader, setloader] = useState(false);
  const [LogoutLoader, SetLogoutLoader] = useState(false)
  const Navigate = useNavigate()
  // Added state for delete confirmation

  console.log("chuti haii sir", utlityFunction);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const ChangeImg = async (e) => {
    let image = e.target.files[0];
    console.log('image dekh le bhai', image);

    setloader(true);
    const result = await UploadImg(image);
    console.log("this is the result", result);

    if (result === null) {
      setloader(false);
      toast.warn("something went wrong please try again");
    }

    if (result.status === 200) {
      setloader(false);
      utlityFunction();
      toast.success(result.data.message);
    } else {
      setloader(false);
      toast.error(result.data.message);
    }
  };

  const Logout = async (values) => {
    SetLogoutLoader(true)
    const result = await auth.Logout(values)


    if (result === null) {
      SetLogoutLoader(false)
      toast.warn("something went wrong please try again")
    }

    if (result.status === 200) {
      Cookies.remove('clientToken');
      SetLogoutLoader(false);
      toast.success(result.data.message)
      Navigate('/')
    }

    else {
      SetLogoutLoader(false);
      toast.error(result.data.message)
    }


  }

  const LoderStyle = {
    width: "100%"
  };

  const handleOpen = () => {
    setPopup(!Popup);
  };

  useEffect(() => {
    AOS.init({
        duration: 500,
        easing: 'ease-out',
        once: true
    });
}, []);


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
                    {loader ? <Loader style={LoderStyle} /> : <img src={proifePic ? proifePic : "/Utility/profile.png"} alt="profile" className='img-fluid  ' id='profile-pic-img' />}
                  </div>
                  <div className="buttons-profile mb-2">
                    <button className="three-btn" >
                      <FaCloudDownloadAlt />
                    </button>

                    <button id='different-button' className="three-btn ">
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
              <div className="upper-text w-100 d-flex justify-content-between align-items-center" data-aos="fade-right">
                <p>Email ID: {email}</p>
              </div>
              <div className="upper-text w-100 d-flex justify-content-between align-items-center" data-aos="fade-right">
                <p>Phone:{number}</p>
              </div>
              <div className="upper-text w-100 d-flex justify-content-between align-items-center" data-aos="fade-right">
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
                  border: "2px solid #447d8e", height: "18px",
                  background: `linear-gradient(90deg, rgb(193 202 44) ${compleateProfile}%, rgb(255, 255, 255) ${compleateProfile}%)`
                }}
              />
              <h4 style={{ float: "right" }}>{compleateProfile}%</h4>
            </div>
            <p className='d-flex justify-content-between align-items-center flex-wrap' style={{ color: `${compleateProfile === 100 ? "green" : "red"}` }}>{compleateProfile === 100 ? "Profile completed" : "Add the missing information to complete the profile"} <span><button onClick={handleOpen} className="log-out">
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button></span></p>
          </div>
        </div>
      </div>
      {Popup && (
        <PopUpCard
          Para={"If you delete this, it cannot be undone. Please think carefully."}
          title={"Are really want to log out"}
          btn1={"Log out"}
          url={"/Utility/log.gif"}
          onClose={handleOpen}
          loader={LogoutLoader}
          onClick={Logout}
        />
      )}
    </div>
  );
}

ProfileCard.defaultProps = {
  email: "",
  proifePic: "",
  number: "",
  compleateProfile: "",
  name: "",
  location: ""
};

export default ProfileCard;
