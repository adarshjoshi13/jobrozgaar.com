import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import "./PlanPage.css";

function PlanPage() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [isYearly, setIsYearly] = useState(false); // State variable to track plan type
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const firstCardWidth = carousel.querySelector('.card').offsetWidth;
        const arrowLeft = document.getElementById('left');
        const arrowRight = document.getElementById('right');
        const carouselChildrens = [...carousel.children];

        let isAutoPlay = true;
        let timeoutId;

        // Get the number of cards that can fit in the carousel at once
        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to the beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
        });

        // Insert copies of the first few cards to the end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML('beforeend', card.outerHTML);
        });

        // Scroll the carousel at appropriate position to hide the first few duplicate cards on Firefox
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowLeft.addEventListener('click', () => {
            carousel.scrollLeft -= firstCardWidth;
        });

        arrowRight.addEventListener('click', () => {
            carousel.scrollLeft += firstCardWidth;
        });

        const dragStart = (e) => {
            setIsDragging(true);
            carousel.classList.add('dragging');
            setStartX(e.pageX);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            setIsDragging(false);
            carousel.classList.remove('dragging');
        };

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove('no-transition');
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove('no-transition');
            }

            clearTimeout(timeoutId);
            if (!carousel.matches(':hover')) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };
        autoPlay();

        carousel.addEventListener('mousedown', dragStart);
        carousel.addEventListener('mousemove', dragging);
        document.addEventListener('mouseup', dragStop);
        carousel.addEventListener('scroll', infiniteScroll);

        return () => {
            carousel.removeEventListener('mousedown', dragStart);
            carousel.removeEventListener('mousemove', dragging);
            document.removeEventListener('mouseup', dragStop);
            carousel.removeEventListener('scroll', infiniteScroll);
        };
    }, []);

    // Function to toggle plan type
    const togglePlanType = () => {
        setIsYearly(!isYearly);
    };

    return (
        <>
        <div className="totally-plans-cover">
            <div className="col-md-12  text-center plans-head">
                    <h4>Choose your plan</h4>
                    <input type="checkbox" id="toggle" className="toggleCheckbox" onClick={togglePlanType} />
                    <label htmlFor="toggle" className='toggleContainer'>
                        <div>Monthly</div>
                        <div>Yearly</div>
                    </label>
                    <p>{isYearly ? "Save 20% with an annual plan" : "Check Yearly plans"}</p>
                </div>
            <div className="plan-cover ">
               
                <div className="wrapper">
                    <FaAngleLeft id="left" className="fa-solid fa-angle-left" />
                    <div ref={carouselRef} className="carousel snip1517">
                        {/* Render your carousel content here */}
                        <div className="card">
                            <div className="plan">
                                <header>
                                    <h4 className="plan-title">Starter</h4>
                                    <div className="plan-cost">
                                        <span className="plan-price">${isYearly ? '16' : '19'}</span>
                                        <span className="plan-type">/{isYearly ? 'year' : 'month'}</span>
                                    </div>
                                </header>
                                <ul className="plan-features">
                                    <li><i className="ion-android-remove"> </i>5GB Linux Web Space</li>
                                    <li><i className="ion-android-remove"> </i>5 MySQL Databases</li>
                                    <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                                    <li><i className="ion-android-remove"> </i>250Gb mo Transfer</li>
                                    <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                                    <li><i className="ion-android-remove"> </i>Daily Backups</li>
                                </ul>
                                <div className="plan-select"><a href="">Select Plan</a></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="plan">
                                <header>
                                    <h4 className="plan-title">Basic</h4>
                                    <div className="plan-cost">
                                        <span className="plan-price">${isYearly ? '50' : '60'}</span>
                                        <span className="plan-type">/{isYearly ? 'year' : 'month'}</span>
                                    </div>
                                </header>
                                <ul className="plan-features">
                                    <li><i className="ion-android-remove"> </i>10GB Linux Web Space</li>
                                    <li><i className="ion-android-remove"> </i>10 MySQL Databases</li>
                                    <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                                    <li><i className="ion-android-remove"> </i>500Gb mo Transfer</li>
                                    <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                                    <li><i className="ion-android-remove"> </i>Daily Backups</li>
                                </ul>
                                <div className="plan-select"><a href="">Select Plan</a></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="plan featured">
                                <header>
                                    <h4 className="plan-title">Professional</h4>
                                    <div className="plan-cost">
                                        <span className="plan-price">${isYearly ? '100' : '120'}</span>
                                        <span className="plan-type">/{isYearly ? 'year' : 'month'}</span>
                                    </div>
                                </header>
                                <ul className="plan-features">
                                    <li><i className="ion-android-remove"> </i>20GB Linux Web Space</li>
                                    <li><i className="ion-android-remove"> </i>20 MySQL Databases</li>
                                    <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                                    <li><i className="ion-android-remove"> </i>1000Gb mo Transfer</li>
                                    <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                                    <li><i className="ion-android-remove"> </i>Daily Backups</li>
                                </ul>
                                <div className="plan-select"><a href="">Select Plan</a></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="plan">
                                <header>
                                    <h4 className="plan-title">Ultra</h4>
                                    <div className="plan-cost">
                                        <span className="plan-price">${isYearly ? '200' : '240'}</span>
                                        <span className="plan-type">/{isYearly ? 'year' : 'month'}</span>
                                    </div>
                                </header>
                                <ul className="plan-features">
                                    <li><i className="ion-android-remove"> </i>50GB Linux Web Space</li>
                                    <li><i className="ion-android-remove"> </i>50 MySQL Databases</li>
                                    <li><i className="ion-android-remove"> </i>Unlimited Email</li>
                                    <li><i className="ion-android-remove"> </i>2000Gb mo Transfer</li>
                                    <li><i className="ion-android-remove"> </i>24/7 Tech Support</li>
                                    <li><i className="ion-android-remove"> </i>Daily Backups</li>
                                </ul>
                                <div className="plan-select"><a href="">Select Plan</a></div>
                            </div>
                        </div>
                        {/* Repeat this block for other plan cards */}
                    </div>
                    <FaAngleRight id="right" className="fa-solid fa-angle-right" />
                </div>
            </div>
        </div>
         
        </>
    );
}

export default PlanPage;
