import React from 'react'
import "./AboutMe.css"
function AboutMe() {
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
                        I am hardworking and dedicated person. I am an excellent team worker and have
                        skills such as Textile. I am looking for opportunities in Fashion Designer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe