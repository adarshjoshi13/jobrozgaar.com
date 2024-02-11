import React from 'react'
import "./Education.css"
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader ,Button } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EducationBox({initialValues,query,Edit,redirect,showArrow}) {
 
  const navigate = useNavigate()
  const [loader,Setloader] = useState(false);
  const [companyArr , SetCompanyArr] = useState([1]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{...initialValues},
    onSubmit: async values => {
        console.log(values)
      Setloader(true)
      const result = await employee.AddEducationData(values)
      console.log("this is the result",result)
       
      if(result === null){
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if(result.status === 200){
        Setloader(false);
        toast.success(result.data.message)
        navigate(redirect)
      }
       
      else{
        Setloader(false);
                toast.error(result.data.message)
      }
    
     
    },
  
  });
  const deleateCompany = (e)=>{
    console.log(e)
    const Formikval = [...formik.values.Courses]
    const newValuestoPush = Formikval.splice(e,1)
    // const CopyCompanyArr = [...companyArr]
    // const NewCompanyArrToPush = CopyCompanyArr.splice(e,1)
   formik.setFieldValue('Courses',Formikval)
//    SetCompanyArr(NewCompanyArrToPush)
console.log('testing',Formikval)
  }

  // fo re direct

  console.log(formik)
  return (
    <div className="container education-box">
      <div className="row w-100">
        <div className="col-md-12 mb-3">
         {showArrow?( <img className='img1' src="/Utility/education.png" alt="" />):null}
          {Edit?(<h4 className='text-center mt-3 mb-3' style={{color:"#8faa46"}}>Edit Education Details</h4>):null}
        </div>
        <div className="col-md-6 m-2">

          <div className="row">
            <div className="col-md-6 d-flex  align-items-center">
              <img className='img2' src="/Utility/check.png" alt="" />
              <h5>My Qualifacation</h5>
            </div>
            <div className="col-md-6">
             <input type="text" className="form-control"  name='MyQualification' onChange={formik.handleChange}  value={formik.values.MyQualification}/>
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
            <input type="text" className="form-control"  name='LanguageKnown' onChange={formik.handleChange}  value={formik.values.LanguageKnown}/>
            </div>
          </div>
        </div>
        <div className="col-md-12 m-2">
         {
          formik.values.Courses.map((i,index)=>{
            return(
              <div className="row mt-5 edu-box" key={index}>
                  <div className="DLT-BTN-EDUCAtion">
                         {formik.values.Courses.length>1?(<button className="tooltips" onClick={()=>{
                                    deleateCompany(index)
                         }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span className="tooltiptext">remove</span>
</button>):null}
   
                         </div>
               {formik.values.Courses.length === 1?"":( <h5 className='text-center'>Course {index + 1}</h5>)}
              <div className="col-md-2 pt-2 ">
              <input type="text" className="form-control" placeholder='Course' name={`Courses[${index}].Course`} onChange={formik.handleChange} value={formik.values.Courses[index].Course}/>
              </div>
              <div className="col-md-2 pt-2">
              <input type="text" className="form-control" placeholder='Board/University' name={`Courses[${index}].University`} onChange={formik.handleChange} value={formik.values.Courses[index].University} />
              </div>
              <div className="col-md-2 pt-2">
              <input type="text" className="form-control" placeholder='Year of passing' name={`Courses[${index}].YearOfPassing`} onChange={formik.handleChange} value={formik.values.Courses[index].YearOfPassing}/>
              </div>
              <div className="col-md-2 pt-2">
              <input type="text" className="form-control" placeholder='Total Marks'name={`Courses[${index}].TotalMarks`} onChange={formik.handleChange} value={formik.values.Courses[index].TotalMarks} />
              </div>
              <div className="col-md-2 pt-2">
                <input type="text" className="form-control" placeholder='Marks Obtain'name={`Courses[${index}].MarkObtain`} onChange={formik.handleChange} value={formik.values.Courses[index].MarkObtain} />
              </div>
              <div className="col-md-2 pt-2">
              <input type="text" className="form-control" placeholder='Percentage' name={`Courses[${index}].Percentage`} onChange={formik.handleChange} value={formik.values.Courses[index].Percentage}/>
              </div>
            </div>
            )
          })
         }
        </div>
        <div className="col-md-12">
          <button className='add-more mb-5' onClick={() => {
    const arr = [...companyArr, companyArr.length + 1];
    SetCompanyArr(arr);

    formik.setFieldValue('Courses', [
        ...formik.values.Courses,
        
            {
                 Course : "",
                 University: "",
                 YearOfPassing: "",
                 TotalMarks: "",
                 MarkObtain: "",
                 Percentage: ""
            }
                
            
            
        
    ]);
}}>+ Add more</button>
        </div>
      </div>
      <div className="row ">
    <div className="col-md-12 mb-5 candidate-btn-div">
   <Button type={"submit"} onClick={formik.handleSubmit} title={loader?(<Loader/>):"save"}/>
    </div>
   </div>
    </div>
  )
}

export default EducationBox