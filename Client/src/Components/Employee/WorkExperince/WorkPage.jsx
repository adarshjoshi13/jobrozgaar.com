import React,{useState} from 'react'
import "./WorkPage.css"
function WorkPage() {

 
        const [isChecked, setIsChecked] = useState(true);
      
        const handleCheckboxChange = () => {
          setIsChecked((prevChecked) => !prevChecked);
        };
    return (
        <>
            <div className="container work-exa p-3">
                <div className="row">
                    <div className="col-md-4">
                        <img className='exx' src="/Utility/ex.png" alt="Personal Image" />
                    </div>
                    <div className="col-md-3 d-flex  ">
                        <img src="/Utility/edu.png" alt="Work Image" />

                    </div>
                </div>
            </div>

            <div className="container title-work mt-4">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-start align-items-center">
                        <img src="/Utility/check.png" alt="" />
                        <h4>Fresher</h4>
                    </div>
                    <div className="col-md-3 d-flex   align-items-center">
                        <img src="/Utility/check.png" alt="" />
                        <h4>Experience</h4>
                    </div>
                </div>

            </div>
            <div className="container title-work mt-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-start align-items-center">
                        <img src="/Utility/check.png" alt="" />
                        <h4>Experience</h4>
                    </div>

                    <div className="col-md-12 mt-3 mb-4">
                        <div className="row">
                            <div className="col-md-3 pt-2 ">
                                <select className="form-control" id="exampleDropdown">
                                    <option value="option1">Year(s)</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>

                            </div>
                            <div className="col-md-3 pt-2">
                                <select className="form-control" id="exampleDropdown">
                                    <option value="option1">Month(s)</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="row">
                                    <div className="col-md-3 pt-2">
                                        <select className="form-control" id="exampleDropdown">
                                            <option value="option1">Company Name</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>

                                        </select>
                                    </div>
                                    <div className="col-md-3 pt-2">
                                        <select className="form-control" id="exampleDropdown">
                                            <option value="option1">Designation</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>

                                        </select>
                                    </div>
                                    <div className="col-md-3 pt-2">
                                        <select className="form-control" id="exampleDropdown">
                                            <option value="option1">Start Date </option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>

                                        </select>
                                    </div>
                                    <div className="col-md-3 pt-2">
                                        <select className="form-control" id="exampleDropdown">
                                            <option value="option1">End Date</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <button className='add-more  '>+ Add more</button>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

            <div className="container title-work mt-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-start align-items-center">
                        <img src="/Utility/check.png" alt="" />
                        <h4>Looking For Jobs In</h4>
                    </div>

                    <div className="col-md-12 mt-3 mb-4">
                        <div className="row">
                            <div className="col-md-4 pt-2 ">
                                <select className="form-control" id="exampleDropdown">
                                    <option value="option1">Job Title </option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>

                            </div>
                            <div className="col-md-4 pt-2">
                                <select className="form-control" id="exampleDropdown">
                                    <option value="option1">Job Types</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>
                            </div>

                            <div className="col-md-4 pt-2">
                                <div className='box-with-check d-flex justify-content-between align-items-center'>
                                    <p className='m-0'>Skills</p>
                                    <label className="container-of-check">
                                        <input checked={isChecked}   onChange={handleCheckboxChange} type="checkbox" />
                                        <div className="checkmark"></div>
                                    </label>

                                </div>
                            </div>


                        </div>



                    </div>

                </div>

            </div>

        </>

    )
}

export default WorkPage