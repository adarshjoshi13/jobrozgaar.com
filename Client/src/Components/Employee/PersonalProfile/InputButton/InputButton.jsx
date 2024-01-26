import React from 'react'
import "./InputButton.css"
import ButtonEdit from '../ButtonEdit/ButtonEdit.jsx'
function InputButton({title,placeholder}) {
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
                            <input style={{ width: "100%" }} type="text" placeholder={placeholder} />
                            <input style={{ border: "none" }} type="file" placeholder={placeholder} />

                        </div>

                    </div>

                    <div className="col-md-2">
                        <ButtonEdit/>
                    </div>
                </div>
            </div>
  )
}

export default InputButton