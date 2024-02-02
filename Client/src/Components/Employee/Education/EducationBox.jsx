import React from 'react'
import "./Education.css"
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';

function EducationBox({initialValues}) {

  const [loader,Setloader] = useState(false);
  const [companyArr , SetCompanyArr] = useState([1]);
  const formik = useFormik({
    // enableReinitialize: true,
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
      }
       
      else{
        Setloader(false);
                toast.error(result.data.message)
      }
    
     
    },
  
  });
  console.log(formik)
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
          companyArr.map((i,index)=>{
            return(
              <div className="row">
               {i === 1?"":( <h5 className='text-center mt-5'>Course{i}</h5>)}
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
    <div className="col-md-12 candidate-btn-div">
   <button type='submit' className="mb-5" onClick={formik.handleSubmit}>{loader?(<Loader/>):"save"}</button>
    </div>
   </div>
    </div>
  )
}

export default EducationBox