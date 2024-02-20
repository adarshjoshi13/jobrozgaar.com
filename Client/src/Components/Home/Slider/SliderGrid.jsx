import React from "react";
import Carousel from "react-elastic-carousel";
import { FaGraduationCap, FaMale, FaUserMd, FaCar } from 'react-icons/fa';
import Item from "./Item";
import "./Slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 992, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
];

const carouselData = [
  { icon: <FaGraduationCap className="fagg" />, title: "Cook Jobs", count: 7593 },
  { icon: <FaMale className="fagg" />, title: "Sales", count: 4830 },
  { icon: <FaUserMd className="fagg" />, title: "Medical", count: 2843 },
  { icon: <FaCar className="fagg" />, title: "Driver", count: 8293 },
  { icon: <FaGraduationCap className="fagg" />, title: "Cook Jobs", count: 3829 },
  { icon: <FaMale className="fagg" />, title: "Sales", count: 3859 },
  { icon: <FaUserMd className="fagg" />, title: "Ashutosh", count: 5555 },
  { icon: <FaCar className="fagg" />, title: "Abhi kaam nhi", count: 5555 },
];

function SliderGrid() {
  return (
    <div className="container">
      <div className="Slider-grid">
        <Carousel breakPoints={breakPoints}>
          {carouselData.map((item, index) => (
            <Item key={index}>
              <div className="icons-of-box">{item.icon}</div>
              <div className="jobprofile_tittle">
                <h3>{item.count}</h3>
                <h6>{item.title}</h6>
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default SliderGrid;
