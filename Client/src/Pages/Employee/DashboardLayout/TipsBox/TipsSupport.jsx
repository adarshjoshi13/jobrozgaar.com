import React from 'react'
import "./TipsSupport.css"
import { ArrowNavigate } from '../../../../Components/export'
function TipsSupport() {
    return (
        <>
            <div className="container">
                <ArrowNavigate url={"/Utility/tips.png"} />
                <div className="row">
                    <div className="col-md-12 d-flex mb-3 justify-content-evenly align-content-center">
                        <div className="head-setting  d-flex justify-content-center  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0 lh-0'><strong>Interview Tips</strong></h5>
                        </div>
                        <div className="head-setting d-flex justify-content-center  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0 lh-0'><strong>Help & Support</strong></h5>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex  justify-content-start align-content-center">
                       
                        <div className="head-setting d-flex justify-content-start  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0 lh-0'><strong>Interview Tips</strong></h5>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default TipsSupport