import React from 'react'
import "./FormBar.css"

function FormBar({ title, type, placeholder,onChange,onblur,value,name,style }) {
    return (
        <div className="container all-input">
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col-md-10">
                    <div className="row">

                        <div className="col-md-10 d-flex justify-contant-center align-items-center">
                            <div>
                                <img src="/Utility/check.png" alt="" />
                            </div>
                            <input type={type} placeholder={placeholder}  onChange={onChange}
                                        onBlur={onblur}
                                        value={value} 
                                        name={name}
                                        style={{...style}}
                                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBar