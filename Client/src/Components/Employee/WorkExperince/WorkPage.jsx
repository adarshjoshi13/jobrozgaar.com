import React from 'react'
import "./WorkPage.css"
import Employeetab from '../Global/Employee-tab/Employee-tab';
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Button, Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import SmallBanner from '../PersonalProfile/SmallBanner/SmallBanner';
function WorkPage({initialValues,senrequest,redirect,Edit}) {

        const [isChecked, setIsChecked] = useState(true);
        const [loader,Setloader] = useState(false);
        const [fresher,setFresher] = useState(false);
        const [Experience,SetExprince] = useState(false)
        let navigate = useNavigate()
        // console.log("bhaubali",initialValues)

        const formik = useFormik({
            enableReinitialize: true,
            initialValues:{...initialValues},
            onSubmit: async values => {
                console.log(values)
              Setloader(true)
              const result = await senrequest(values)
              
               
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

        //   console.log(formik.setFieldValue(Experience[0].year,'beta'))
          
          const [companyArr , SetCompanyArr] = useState([1]);
          console.log('formik',formik.values)

          const TakeCompanyName = (index,newName,name)=>{
            console.log(name,`Experience[${index}].${name}`)

            // formik.values.Experience[i].year = 'lund'
            formik.setFieldValue( `Experience[${index}].${name}`, newName);
          }

          const deleateCompany = (e)=>{
            console.log(e)
            const Formikval = [...formik.values.Experience]
            const newValuestoPush = Formikval.splice(e,1)
            // const CopyCompanyArr = [...companyArr]
            // const NewCompanyArrToPush = CopyCompanyArr.splice(e,1)
           formik.setFieldValue('Experience',Formikval)
        //    SetCompanyArr(NewCompanyArrToPush)
        console.log('testing',Formikval)
          }

        
        //   console.log("check kar le lode",formik.values.Experience)
        // for setting check box value of fresher and exprince in advance
        useEffect(() => {
            if (initialValues?.Position === "Fresher") {
                setFresher(true);
            }
        
            if (initialValues?.Position === "Experience") {
                SetExprince(true);
            }
        }, [initialValues]);
        
    return (
        <>
        <div className="container">
        <div className="row">
           {/* <div className="col-md-3 ">
           <Employeetab active={"work Experience"}/>
           </div> */}
        <div className=" col-md-12  lower-job-wraper">
        <div className="container work-exa p-3">
                <div className="row">
                    <div className="col-md-12">
                        
                        {
                    Edit?(<h3 className='mt-5 text-center'>Work Experience</h3>): (<SmallBanner personalImage={"/Utility/ex.png"} eduImage={"/Utility/edu.png"} />)

               
                   }
                       
                    </div>
                  
                </div>
            </div>
         <div className="container title-work mt-4">
                <div className="d-flex">
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
               {formik.values.Position === "Fresher"?null: <div className="row">
                <div className="col-md-12 d-flex justify-content-start align-items-center">
                             <img src="/Utility/check.png" alt="" />
                             <h4>Experience</h4>
                         </div>
                {
                    formik.values.Experience.map((i,index)=>{
                        console.log('index',i)
                      return (
                        <div className="row mt-5 boxed" key={index}>
                            
                       <div className="col-md-12 d-flex justify-content-start align-items-center bana-do mt-5">
                             <img src="/Utility/check.png" alt="" />
                             <h5>Company {index +1}</h5>
                             <div className="DLT-BTN mb-5">
                         {formik.values.Experience.length>1 || Edit === true?(<button className="tooltips" onClick={()=>{
                                    deleateCompany(index)
                         }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>
  <span className="tooltiptext">remove</span>
</button>):null}
   
                         </div>
                         </div>
     
                        <div className="col-md-12 mt-3 mb-4">
                            <div className="row ">
                       
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
}}>{formik.values.Experience.length<1?" +Add a company":"+ Add more"}</button>

    
                                </div>

                </div>}

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
           <Button type={"submit"} onClick={formik.handleSubmit} title={loader?(<Loader/>):"save"}/>
          
           </div>
        </div>

        </>

    )
}


export default WorkPage

