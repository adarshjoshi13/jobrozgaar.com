import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaLinkedin, FaMapMarker, FaBook, FaGamepad, FaUtensils, FaMicrophone } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import "./Resume.css"
import jsPDF from 'jspdf';

const imageUrl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";

function Resume() {
    const [loader, setLoader] = useState(false);
    const [imageDataUrl, setImageDataUrl] = useState("");

    useEffect(() => {
        // Fetch the image data and convert it to a data URL
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onload = () => {
                    setImageDataUrl(reader.result);
                };
                reader.readAsDataURL(blob);
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    }, []);

    function downloadPdf() {
        setLoader(true);
        const capture = document.querySelector(".container-resume");
        html2canvas(capture).then((canvas) => {
            const pdf = new jsPDF("p", "mm", "a4");
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);
            pdf.save("Resume.pdf");
            setLoader(false);
        });
    }

    return (
        <div className="resume">
            <div className="col-md-12 text-center mt-4">
                <button onClick={downloadPdf} className="buttonDownload">
                    {loader ? "Downloading" : "Download Now"}
                </button>
            </div>
            <div className="container-resume">
                <div className="left_Side">
                    <div className="profileText">
                        <div className="imgBx">
                            {/* Render the image using the data URL */}
                            {imageDataUrl && <img className="photo" src={imageDataUrl} alt="profile" />}
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
