import React from 'react';
import './PopUpCard.css';

function PopUpCard({ onClose }) {
  return (
    <>
    <div className="edit-pop-cover">
      <div className="popup-edit-card">
        <button className="dismiss" type="button" onClick={onClose}>
          ×
        </button>
        <div className="header-edit">
          <div className="image">
           <img width={"60px"} src="https://assets-v2.lottiefiles.com/a/b5641ed8-1152-11ee-ada0-8f4e8e17569e/BYD1hNXDDt.gif" alt="" />
          </div>
          <div className="content">
            <span className="title">You can't edit</span>
            <p className="message">If you want to edit your post then you have to buy our plans first.</p>
          </div>
          <div className="actions">
            <button className="history" type="button">Buy Now</button>
            <button onClick={onClose} className="track" type="button">Go Back</button>
          </div>
        </div>
      </div>
    </div>
    

    </>
  );
}

export default PopUpCard;
