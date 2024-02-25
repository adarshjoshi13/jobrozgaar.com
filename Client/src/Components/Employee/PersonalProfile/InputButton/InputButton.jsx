import React from 'react'
import "./InputButton.css"
import ButtonEdit from '../ButtonEdit/ButtonEdit.jsx'
import Errofeild from '../../../Global/UI/Erorrspan/Errofeild.jsx'
function InputButton({title,type,placeholder,onchange,onblur,value1,value2,name1,name2,uploadfile,maxl,minl,error}) {
  return (
    <div className="container file-input ">
                <div className="row">
                    <div className="col-md-2 p-0 d-flex align-items-center">
                        <h5>{title}</h5>
                    </div>
                    <div className="col-md-10 p-0">


                        <div className="for-input  col-md-10 d-flex justify-contant-center align-items-center">
                            <div>
                                <img className='check' src="/Utility/check.png" alt="" />
                            </div>
                            <input style={{ width: "100%" }} type={type} placeholder={placeholder} onChange={onchange} onBlur={onblur} value={value1} name={name1} maxLength={maxl} minLength={minl}/>
                            <input style={{ border: "none" }} type="file" placeholder={placeholder} name={name2}
                            onChange={uploadfile}/>

                        </div>

                    </div>
                    <Errofeild error={error}/>

                </div>
            </div>
  )
}

export default InputButton