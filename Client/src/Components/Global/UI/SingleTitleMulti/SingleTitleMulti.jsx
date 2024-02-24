import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MultiMenu from '../MultiMenu/MultiMenu';

function SingleTitleMulti({ title, onChange, value, name, margin, selectinput, options }) {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-out',
            once: true
        });
    }, []);
    return (
        <div className="container SingleTitleBar" >
            <div className="row" data-aos="fade-left">
                <div className="col-md-2 p-0 d-flex align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col-md-10">
                    <div className="row">

                        <div className="col-md-10 p-0 d-flex justify-contant-center align-items-center">
                            <div>
                                <img src="/Utility/check.png" alt="" />
                            </div>
                            {/* Replace the input with the SelectInput component */}
                            {/* <SelectInput
                                name={name}
                                value={value}
                                handleChange={onChange}
                                margin={margin}
                                selectinput={selectinput}
                                options={options}


                            /> */}
                            <MultiMenu
                                name={name}
                                value={value}
                                handleChange={onChange}
                                margin={margin}
                                selectinput={selectinput}
                                options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTitleMulti;
