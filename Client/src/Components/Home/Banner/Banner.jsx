import React from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {

  const bannerData = {
    background: "linear-gradient(to right, #396778, #87a14c)",
    title: "Fresh <br/> Talent<span style='color:#f8ed32'> +</span> <br/> Top Employers",
    subTitle: "Create a future with us",
    findTalentLink: "#", 
    findJobLink: "#", 
  };

  return (
    <div className="slider-active" style={{ backgroundImage: bannerData.background }}>
      <div className="single-slider slider-height d-flex align-items-center" data-background="">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-9 col-md-10">
              <div className="hero__caption">
                <h1 dangerouslySetInnerHTML={{ __html: bannerData.title }} />
                <h4>{bannerData.subTitle}</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8 find-talent-btns">
           
                 <Link to={bannerData.findTalentLink} className="findbutton">Find Talent</Link>
              <Link to={bannerData.findJobLink} className="findbutton findbutton_ml">Find Job</Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
