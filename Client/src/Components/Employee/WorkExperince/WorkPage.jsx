import React from 'react'
import "./WorkPage.css"
import Employeetab from '../Global/Employee-tab/Employee-tab';
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
function WorkPage({initialValues,senrequest}) {

 
        const [isChecked, setIsChecked] = useState(true);
        const [loader,Setloader] = useState(false);
        const [fresher,setFresher] = useState(false);
        const [Experience,SetExprince] = useState(false)
        console.log(fresher,Experience)
        
        // console.log(senrequest)
      
        // const handleCheckboxChange = () => {
        //   setIsChecked((prevChecked) => !prevChecked);
        // };
        const formik = useFormik({
            // enableReinitialize: true,
            initialValues:{...initialValues},
            onSubmit: async values => {
                console.log(values)
              Setloader(true)
              const result = await employee.AddWorkingEXprince(values)
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

        //   console.log(formik.setFieldValue(Experience[0].year,'beta'))
          
          const [companyArr , SetCompanyArr] = useState([1]);
          console.log('formik',formik.values)

          const TakeCompanyName = (index,newName,name)=>{
            console.log(name,`Experience[${index}].${name}`)

            // formik.values.Experience[i].year = 'lund'
            formik.setFieldValue( `Experience[${index}].${name}`, newName);
          }

    return (
        <>
        <div className="work-wraper">
        <div className="row">
           <div className="col-md-3 ">
           <Employeetab/>
           </div>
        <div className=" col-md-8  lower-job-wraper">
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
                    <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
                    <div className="m-1 checkbox-wrapper-31">
                        <input type="checkbox" onChange={(e)=>{
                            // console.log(e.target.value)
                            setFresher(!fresher)
                       if(e.target.checked === true){
                    formik.setFieldValue('Position','Fresher')
                    SetExprince(false)
                       
                       }
                       else{
                        formik.setFieldValue('Position','')
                       }
                        }} checked={fresher}/>
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>

                    </div>
                    <h5 style={{ color: "gray" }}>Fresher</h5>
                </div>
                    </div>
                    <div className="col-md-3 d-flex   align-items-center">
                    <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
                    <div className="m-1 checkbox-wrapper-31">
                        <input type="checkbox" onChange={(e)=>{
                              SetExprince(!Experience)
                       if(e.target.checked === true){
                        setFresher(false)
                    formik.setFieldValue('Position',"Experience");
                
                }
                else{
                    formik.setFieldValue('Position','')
                   }
                
                
                }} checked={Experience}/>
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>

                    </div>
                    <h5 style={{ color: "gray" }}>Experience</h5>
                </div>
                    </div>
                </div>

            </div>
            <div className="container title-work mt-5">
                <div className="row">
                <div className="col-md-12 d-flex justify-content-start align-items-center">
                             <img src="/Utility/check.png" alt="" />
                             <h4>Experience</h4>
                         </div>
                {
                    companyArr.map((i,index)=>{
                        console.log('index',i)
                      return (
                        <div className="row mt-5" key={index}>
                       <div className="col-md-12 d-flex justify-content-start align-items-center">
                             <img src="/Utility/check.png" alt="" />
                             <h5>Company {i}</h5>
                         </div>
     
                        <div className="col-md-12 mt-3 mb-4">
                            <div className="row">
                                <div className="col-md-3 pt-2 ">
                                <input type="number"className="form-control mt-4" id="exampleDropdown" placeholder='Year(s)' onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'year')
                                }}   value={formik.values.Experience[index].year}
                        name={`Experience[${index}].year`}/>
    
                                </div>
                                <div className="col-md-3 pt-2">
                                <input type="number"className="form-control mt-4" id="exampleDropdown" placeholder='Month(s)' onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'month')
                                }}   value={formik.values.Experience[index].month}
                        name={`Experience[${index}].month`}/>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <div className="row">
                                        <div className="col-md-3 pt-2">
                                        <input type="text"className="form-control mt-4" id="exampleDropdown" placeholder='Company Name'  onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'CompanyName')
                                }}   value={formik.values.Experience[index].CompanyName}
                        name={`Experience[${index}].CompanyName`}/>
                                        </div>
                                        <div className="col-md-3 pt-2">
                                           <input type="text"className="form-control mt-4" id="exampleDropdown" placeholder='Designation' onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'Designation')
                                }}   value={formik.values.Experience[index].Designation}
                        name={`Experience[${index}].Designation`} />
                                        </div>
                                        <div className="col-md-3 pt-2">
                                        <label htmlFor="startDate">Start date</label>
                                           <input type="date" className="form-control" id="startDate" onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'StartDate')
                                }}   value={formik.values.Experience[index].StartDate}
                        name={`Experience[${index}].StartDate`} />
                                        </div>
                                        <div className="col-md-3 pt-2 ">
                                            <label htmlFor="end-date">End date</label>
                                            
                                            <input type="date" className="form-control" id="end-date" placeholder='End date' onChange={(e)=>{
                                    TakeCompanyName(index,e.target.value,'EndDate')
                                }}   value={formik.values.Experience[index].EndDate}
                        name={`Experience[${index}].EndDate`}/>
    
                                            
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
    
    
    
                        </div>
                       </div>
                      )
                    })
                }

<div className="col-md-12 mt-4">
<button className='add-more' onClick={() => {
    const arr = [...companyArr, companyArr.length + 1];
    SetCompanyArr(arr);

    formik.setFieldValue('Experience', [
        ...formik.values.Experience,
        
            {
                    year: "",
                    month: "",
                    CompanyName: "",
                    Designation: "",
                    StartDate: "",
                    EndDate: ""
            }
                
            
            
        
    ]);
}}>+ Add more</button>

    
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
                                <select className="form-control" id="exampleDropdown" onChange={formik.handleChange} value={formik.values.LookingForJobs.JobTitle}
                    name={'LookingForJobs.JobTitle'}>
                                    <option value="option1">Job Title </option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>

                            </div>
                            <div className="col-md-4 pt-2">
                                <select className="form-control" id="exampleDropdown" onChange={formik.handleChange}   value={formik.values.LookingForJobs.JobType}
                    name={'LookingForJobs.JobType'}>
                                    <option value="option1">Job Types</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>

                                </select>
                            </div>

                            <div className="col-md-4 pt-2">
                                {/* <div className='box-with-check d-flex justify-content-between align-items-center'>
                                    <p className='m-0'>Skills</p>
                                    <label className="container-of-check">
                                        <input checked={isChecked}   onChange={handleCheckboxChange} type="text" />
                                        <div className="checkmark"></div>
                                    </label>

                                </div> */}
                                <input type="text" className='form-control' placeholder='Skills' onChange={formik.handleChange} value={formik.values.Skills}
                    name={'Skills'} />
                            </div>


                        </div>



                    </div>

                </div>

            </div>
         </div>
        </div>
           <div className="workingExprincebtn">
            <button type='submit'onClick={formik.handleSubmit}>SAVE</button>
           </div>
        </div>

        </>

    )
}


export default WorkPage

