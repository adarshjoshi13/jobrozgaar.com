import React from 'react'
import "./TipsSupport.css"
import { ArrowNavigate } from '../../../../Components/export'
function TipsSupport() {
    return (
        <>
            <div className="container mt-3 p-0">
                <ArrowNavigate url={"/Utility/tips.png"} />
               
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap mb-3 justify-content-evenly align-content-center">
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
                    <div className="col-md-12 d-flex flex-wrap  justify-content-start align-content-center">

                        <div className="head-setting d-flex justify-content-start  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0 lh-0'><strong>Interview Tips</strong></h5>

                        </div>

                    </div>
                    <div class="col-12 d-grid mb-3 tip-box-dad">
                        <div class="tip-box d-flex align-items-center flex-column text-center">
                            <h5>See the Video Tips for Job Interview</h5>
                            <img src="/Utility/23.jpg" alt="" />
                        </div>
                        <div class="tip-box text-center">
                            <h5>Listen to prepare yourself
                                How to talk to company?</h5>
                            <img src="/Utility/24.png" alt="" />
                        </div>
                        <div class="tip-box text-center">
                            <h5>Prepare yourself for the details
                                of your job type and skill you have</h5>
                            <img src="/Utility/25.jpg" alt="" />
                        </div>
                        <div class="tip-box text-center">
                            <h5>On Interview wear formals
                                and shoes</h5>
                            <img src="/Utility/27.png" alt="" />
                        </div>
                        <div class="tip-box text-center">
                            <h5>Best of Luck for Interview.</h5>
                            <img src="/Utility/29.jpg" alt="" />
                        </div>
                        <div class="tip-box text-center">
                            <h5>Take your Resume, Passport size
                                Photograph</h5>
                            <img src="/Utility/28.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TipsSupport