import React from 'react'
import Buttons from '../Buttons/Buttons'
import './tab.css'
import { useState,useEffect } from 'react'
import employee from '../../../../API/Employee';

function Employeetab({active}) {
  console.log('active',active)
  // const [profileCompleate,setProfileCompleatd]
//   const [loader,Setloader] = useState(false);
//     const [formData, setFormData] = useState({})
//   useEffect(()=>{
//     (async ()=>{
//       const result = await employee.getintialdata();
//       if(result.status === 200){
//         console.log('yel bhai',result.data)
//         setFormData({...result.data})
//       }
//      else{
//        toast.error("erro fetching data")
//      }
//     })()
//   },[])
//   const profileCompleate = formData?.ProfileCompleate
//   console.log("formdata",profileCompleate)
//   const buttonsIfDetailsNotCompleated = [{
//     title:"Personal Profile",
//     link:'/personal-profile',
//     color:"#808080"
//   },
//   {
//     title:"work Experience",
//     link:'/work-experience',
//     color:" #808080"
//   },
//   {
//     title:"Education",
//     link:'/education',
//     color:" #808080"
//   }
// ]
// console.log('active',active === buttonsIfDetailsNotCompleated[0].title)
const NormalButton = [
  {
    title:"My-Jobs",
    link:'/Dashboard/jobs/my-jobs',
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
  link:'/Dashboard/education',
  color:" #808080"
},
{
  title:"Offer Letter",
  link:'/Dashboard/offer-letter',
  color:" #808080"
},
{
  title:"Tips & Support",
  link:'/Dashboard/tips-support',
  color:" #808080"
},
{
  title:"setting",
  link:'/Dashboard/setting',
  color:" #808080"
},

]

return (
  <div className=" button-home-dash home-dash-nav ">
  {NormalButton.map((i, index) => (
    i.title === active
      ? <Buttons to={i.link} color={'#8FAA46'} title={i.title} key={index} />
      : <Buttons to={i.link} color={i.color} title={i.title} key={index}/>
  ))}
</div>
)
  
  
}

export default Employeetab