import React, { useState } from 'react';
import "./Resume.css"
import { FaPhone, FaEnvelope, FaGlobe, FaLinkedin, FaMapMarker, FaBook, FaGamepad, FaUtensils, FaMicrophone } from 'react-icons/fa';

function Resume() {
    const [loader, setLoder] = useState(false);


    return (
        <div className="resume">
        <div className="col-md-12 text-center mt-4">
        <button class="buttonDownload">Download</button>
        </div>
              <div className="container-resume">
            <div className="left_Side">
                <div className="profileText">
                    <div className="imgBx">
                        <img className="photo" src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/399801825_1527714274695982_5999409967213285464_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2TPyofeQNL8AX9UsyOi&_nc_ht=scontent-del1-2.xx&oh=00_AfAoUgpJipcoaYhPIZ-1BH_cp3tJvxnRPCX5e4vOUHIOqA&oe=65E20AD1" alt="profile" />
                    </div>
                    <br />
                    <h4 className='text-center text-white'>Ashutosh Yadav<br /><span style={{color:"#8faa46"}}>Web Developer</span> </h4>
                </div>

                <div className="contactInfo">
                    <h3 className="title">Contact Info</h3>
                    <ul className='p-0'>
                        <li>
                            <span className="icon"><FaPhone /></span>
                            <span className="text">+91 8178710398</span>
                        </li>
                        <li>
                            <span className="icon"><FaEnvelope /></span>
                            <span className="text">ashutoshyadav@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><FaGlobe /></span>
                            <span className="text">www.ashutosh.com</span>
                        </li>
                        <li>
                            <span className="icon"><FaLinkedin /></span>
                            <span className="text">www.linkedin/me</span>
                        </li>
                        <li>
                            <span className="icon"><FaMapMarker /></span>
                            <span className="text">Delhi, India</span>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo education">
                    <h3 className="title">Education</h3>
                    <ul className='p-0'>
                        <li>
                            <h5>2010 - 2013</h5>
                            <h6>Master Degree in Computer Science</h6>
                            <h6>University Name</h6>
                        </li>
                        <li>
                            <h5>2007 - 2013</h5>
                            <h6>Bachelor Degree Computer Science</h6>
                            <h6>University Name</h6>
                        </li>
                        <li>
                            <h5>1997 - 2007</h5>
                            <h6>Matriculation </h6>
                            <h6>University Name</h6>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo language">
                    <h3 className="title">Languages</h3>
                    <ul className='p-0'>
                        <li>
                            <span className="text">English</span>
                            <span className="percent">
                                <div className="englishw50" />
                            </span>
                        </li>
                    </ul>
                    <ul className='p-0'>
                        <li>
                            <span className="text">Hindi</span>
                            <span className="percent">
                                <div className="russianw90" />
                            </span>
                        </li>
                    </ul>
                    <ul className='p-0'>
                        <li>
                            <span className="text">French</span>
                            <span className="percent">
                                <div className="frenchw30" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right_Side">
                <div className="about">
                    <h4 className="title2">Profile</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br /> <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="about">
                    <h4 className="title2">Experience</h4>
                    <div className="box">
                        <div className="year_company">
                            <h5>2020 - Present</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior UX Developer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2018 - 2020</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>UX Developer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2016 - 2018</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Junior UX Developer</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="about skills">
                    <h4 className="title2">Professionals skills</h4>
                    <div className="box">
                        <h5>HTML</h5>
                        <div className="percent">
                            <div className="htmlws30" />
                        </div>
                    </div>
                    <div className="box">
                        <h5>CSS</h5>
                        <div className="percent">
                            <div className="cssws45" />
                        </div>
                    </div>
                    <div className="box">
                        <h5>JavaScript</h5>
                        <div className="percent">
                            <div className="jsws70" />
                        </div>
                    </div>
                    <div className="box">
                        <h5>Photoshop</h5>
                        <div className="percent">
                            <div className="phws40" />
                        </div>
                    </div>
                    <div className="box">
                        <h5>Illustrator</h5>
                        <div className="percent">
                            <div className="ilws60" />
                        </div>
                    </div>
                    <div className="box">
                        <h5>Adobe XD</h5>
                        <div className="percent">
                            <div className="adw70" />
                        </div>
                    </div>
                </div>
                <div className="about interest">
                    <h4 className="title2">Interests</h4>
                    <ul className='p-0'>
                        <li><FaBook /> Reading</li>
                        <li><FaGamepad /> Gaming</li>
                        <li><FaUtensils /> Cooking</li>
                        <li><FaMicrophone /> Singing</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      
    );
}

export default Resume;
