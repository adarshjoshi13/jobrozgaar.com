import React from 'react';
import { Link } from 'react-router-dom';
import "./Buttons.css";

function Buttons({ color, title, to }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <Link to={to}>
      <div className="button-cover-pin">
        <button style={buttonStyle}>{title}</button>
        <img src="/Utility/6.png" alt="" />
      </div>
    </Link>
  );
}

export default Buttons;
