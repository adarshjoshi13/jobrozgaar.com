import React from 'react'
import "./Education.css"

function EducationBox() {
  return (
    <div className="container education-box">
      <div className="row w-100">
        <div className="col-md-12 mb-3">
          <img className='img1' src="/Utility/education.png" alt="" />
        </div>
        <div className="col-md-6 m-2">
          <div className="row">
            <div className="col-md-6 d-flex  align-items-center">
              <img className='img2' src="/Utility/check.png" alt="" />
              <h5>My Qualifacation</h5>
            </div>
            <div className="col-md-6">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Graduation</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6 m-2">
          <div className="row">
            <div className="col-md-6 d-flex  align-items-center">
              <img className='img2' src="/Utility/check.png" alt="" />
              <h5>Language Known</h5>
            </div>
            <div className="col-md-6">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">English</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-12 m-2">
          <div className="row">
            <div className="col-md-2 pt-2 ">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Course</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-md-2 pt-2">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Board / University</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-md-2 pt-2">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Year of
                  Passing</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-md-2 pt-2">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Total Marks</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-md-2 pt-2">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Mark Obtain</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-md-2 pt-2">
              <select className="form-control" id="exampleDropdown">
                <option value="option1">Percentage</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <button className='add-more mb-5'>+ Add more</button>
        </div>
      </div>
    </div>
  )
}

export default EducationBox