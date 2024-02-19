import React from 'react';
import './PopUpCard.css';
import { Link } from 'react-router-dom';
import { Loader } from '../../../../Components/export';
function PopUpCard({ onClose,url,Where ,title,btn1 ,Para,onClick,loader }) {
  return (
    <>
    <div className="edit-pop-cover">
      <div className="popup-edit-card">
        <button className="dismiss" type="button" onClick={onClose}>
          ×
        </button>
        <div className="header-edit">
          <div className="image">
           <img width={"120px"} src={url}  />
          </div>
          <div className="content">
            <span className="title">{title}</span>
            <p className="message">{Para}</p>
          </div>
          <div className="actions">
            <button className="history" type="button" onClick={onClick}><Link to={Where}>{loader?<Loader/>:btn1}</Link></button>
            <button onClick={onClose} className="track" type="button">Go Back</button>
          </div>
        </div>
      </div>
    </div>
    

    </>
  );
}

export default PopUpCard;
