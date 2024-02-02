import React from 'react'
import "./InputButton.css"
import ButtonEdit from '../ButtonEdit/ButtonEdit.jsx'
function InputButton({title,placeholder,onchange,onblur,value1,value2,name1,name2,uploadfile}) {
  return (
    <div className="container file-input ">
                <div className="row">
                    <div className="col-md-2 d-flex align-items-center">
                        <h5>{title}</h5>
                    </div>
                    <div className="col-md-8">


                        <div className="for-input w-100 col-md-10 d-flex justify-contant-center align-items-center">
                            <div>
                                <img className='check' src="/Utility/check.png" alt="" />
                            </div>
                            <input style={{ width: "100%" }} type="number" placeholder={placeholder} onChange={onchange} onBlur={onblur} value={value1} name={name1} />
                            <input style={{ border: "none" }} type="file" placeholder={placeholder} name={name2}
                            onChange={uploadfile}/>

                        </div>

                    </div>

                    <div className="col-md-2">
                        {/* <ButtonEdit/> */}
                    </div>
                </div>
            </div>
  )
}

export default InputButton