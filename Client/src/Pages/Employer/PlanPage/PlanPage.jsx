import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import './PlanPage.css';
// import Checking from '../checking/Checking';


const PlanPage = () => {
    // State to track selected plan type
    const [isYearly, setIsYearly] = useState(false);

    // Function to toggle plan type
    const togglePlanType = () => {
        setIsYearly(!isYearly);
    };

    // Function to calculate yearly price
    const calculateYearlyPrice = (monthlyPrice) => {
        // Assuming 20% discount for yearly plans
        return Math.round(monthlyPrice * 12 * 0.8);
    };

    const plans = [
        {
            title: "Starter",
            price: isYearly ? "0" : "0",
            type: "/Free",
            features: [
                "250 Characters in Job Description",
                "Boost on Job Search Page",
                "Job Branding",
                "24/7 Tech Support",

            ]
        },
        {
            title: "Basic",
            price: isYearly ? "19" : "59",
            type: isYearly ? "/year" : "/month",
            features: [
                "250 Characters in Job Description",
                "Boost on Job Search Page",
                "Job Branding",
                "24/7 Tech Support",
            ]
        },
        {
            title: "Professional",
            price: isYearly ? "129" : "49",
            type: isYearly ? "/year" : "/month",
            features: [
                "250 Characters in Job Description",
                "Boost on Job Search Page",
                "Job Branding",
                "24/7 Tech Support",
            ]
        },
        {
            title: "Ultra",
            price: isYearly ? "169" : "99",
            type: isYearly ? "/year" : "/month",
            features: [
                "250 Characters in Job Description",
                "Boost on Job Search Page",
                "Job Branding",
                "24/7 Tech Support",
            ]
        }
    ];

    return (
        <div className="container-xl">
            <div className="col-md-12 mt-4 mb-3 text-center plans-head">
                <h4>Choose your plan</h4>
                <input type="checkbox" id="toggle" className="toggleCheckbox" onClick={togglePlanType} />
                <label htmlFor="toggle" className='toggleContainer'>
                    <div>Monthly</div>
                    <div>Yearly</div>
                </label>
                <p>{isYearly ? "Save 20% with an annual plan" : "Check Yearly plans"}</p>
            </div>

         

            <div className="snip1517">
                {plans.map((plan, index) => (
                    <div className={`plan ${index === 2 ? "featured" : ""}`} key={index}>
                        <header>
                            <h4 className="plan-title">{plan.title}</h4>
                            <div className="plan-cost">
                                <span className="plan-price">${plan.price}</span>
                                <span className="plan-type">{plan.type}</span>
                            </div>
                        </header>
                        <ul className="plan-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}><FaTimes /> {feature}</li>
                            ))}
                        </ul>
                        <div className="plan-select"><Link to="/">Select Plan</Link></div>
                    </div>
                ))}
            </div>

            {/* <Checking/> */}

            {/* <Checking /> */}
        </div>
    );
};

export default PlanPage;
