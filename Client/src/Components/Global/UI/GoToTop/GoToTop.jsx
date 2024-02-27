import React, { useState, useEffect } from 'react';
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa";

function GoToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const goToUp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <div className="cover-of-up-btn">
                <button className='top-btn-up' onClick={goToUp}>
                    <div className='arrow-up-wrapper'>
                        <FaArrowUp />
                    </div>
                </button>
            </div>
        )
    );
}

export default GoToTop;
        