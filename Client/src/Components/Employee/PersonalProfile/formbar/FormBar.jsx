import React from 'react'
import "./FormBar.css"
import Errofeild from '../../../Global/UI/Erorrspan/Errofeild'

function FormBar({ title, type, placeholder,onChange,onblur,value,name,style,error }) {
    return (
        <div className="container all-input">
            <div className="row">
                <div className="col-md-2 p-0 d-flex align-items-center">
                    <h5>{title}</h5>
                </div>
                <div className="col-md-10">
                    <div className="row">

                        <div className="col-md-10 p-0 d-flex justify-contant-center align-items-center">
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
                        <Errofeild error={error}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBar