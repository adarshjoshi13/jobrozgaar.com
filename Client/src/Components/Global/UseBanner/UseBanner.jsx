import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UseBanner.css';

const UseBanner = ({ title="", backgroundImg }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMinHeight = () => {
    if (windowWidth <= 450) {
      return 146;
    } else if (windowWidth <= 768) {
      return 200;
    } else if (windowWidth <= 1032) {
      return 300;
    } else {
      return 450;
    }
  };
  const sliderStyle = {
    backgroundImage: `url('${backgroundImg}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    minHeight: `${getMinHeight()}px`,
  };

  return (
    <div className="slider-area">
      <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={sliderStyle}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UseBanner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default UseBanner;
