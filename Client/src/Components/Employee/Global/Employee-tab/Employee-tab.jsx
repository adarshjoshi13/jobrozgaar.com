import React from 'react'
import Buttons from '../Buttons/Buttons'
import './tab.css'
import { useState,useEffect } from 'react'
import employee from '../../../../API/Employee';

function Employeetab({active}) {
  console.log('active',active)
  // const [profileCompleate,setProfileCompleatd]
  const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
  useEffect(()=>{
    (async ()=>{
      const result = await employee.getintialdata();
      if(result.status === 200){
        console.log('yel bhai',result.data)
        setFormData({...result.data})
      }
     else{
       toast.error("erro fetching data")
     }
    })()
  },[])
  const profileCompleate = formData?.ProfileCompleate
  console.log("formdata",profileCompleate)
  const buttonsIfDetailsNotCompleated = [{
    title:"Personal Profile",
    link:'/personal-profile',
    color:"#808080"
  },
  {
    title:"work Experience",
    link:'/work-experience',
    color:" #808080"
  },
  {
    title:"Education",
    link:'/education',
    color:" #808080"
  }
]
// console.log('active',active === buttonsIfDetailsNotCompleated[0].title)
const NormalButton = [
  {
    title:"My-Jobs",
    link:'/my-jobs',
    color:" #808080"
  },
  
  {
  title:"Personal Profile",
  link:'/Dashboard/personal-profile',
  color:" #808080"
},
{
  title:"work Experience",
  link:'/Dashboard/work-experience',
  color:"#808080"
},
{
  title:"Education",
  link:'/education',
  color:" #808080"
},
{
  title:"Offer Letter",
  link:'/offer-letter',
  color:" #808080"
},
{
  title:"Tips & Suppor",
  link:'/tips-support',
  color:" #808080"
},
{
  title:"setting",
  link:'/setting',
  color:" #808080"
},

]

if(profileCompleate === 100){
  return (
    <div className="d-flex flex-md-row flex-lg-row flex-xs-row flex-sm-wrap flex-xs-wrap flex-sm-row flex-wrap button-home-dash home-dash-nav">
    {NormalButton.map((i, index) => (
      i.title === active
        ? <Buttons to={i.link} color={'green'} title={i.title} key={index} />
        : <Buttons to={i.link} color={i.color} title={i.title} key={index}/>
    ))}
  </div>
  )
}
 else{ 
  return (
  
    <div className="d-flex flex-md-column flex-lg-column flex-xs-row flex-sm-wrap flex-xs-wrap flex-sm-row flex-wrap button-home-dash home-dash-nav">
          {buttonsIfDetailsNotCompleated.map((i, index) => (
      i.title === active
        ? <Buttons to={i.link} color={'green'} title={i.title} key={index} />
        : <Buttons to={i.link} color={i.color} title={i.title} key={index} />
    ))}
  </div>
  )
 }
  
  
  
}

export default Employeetab