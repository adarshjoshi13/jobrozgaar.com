import React from 'react'
import { Header,Footer } from './Components/export';
import {Home,FindATalent, FindAJob, About, Contact, SkillDevelopment, GetJob, JobDetails, StaffPlacement, PayRoll, ManPower, Login, EmployeDashBorad, MyJobs, PersonalProfile, WorkExperince, Education, OfferLetter} from './Pages/export'
import { Routes,Route } from 'react-router-dom';


const Layout = ({ children }) => (

  <>
    <Header />
    {children}
    <Footer />
  </>
);
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>}/>
      <Route path='/find-a-talent' element={<Layout><FindATalent/></Layout>}/>
      <Route path='/find-a-job' element={<Layout><FindAJob/></Layout>}/>
      <Route path='/about' element={<Layout><About/></Layout>}/>
      <Route path='/contact' element={<Layout><Contact/></Layout>}/>
      <Route path='/skill-development' element={<Layout><SkillDevelopment/></Layout>}/>
      <Route path='/get-job' element={<Layout><GetJob/></Layout>}/>
      <Route path='/job-details' element={<Layout><JobDetails/></Layout>}/>
      <Route path='/staff-placement' element={<Layout><StaffPlacement/></Layout>}/>
      <Route path='/payroll_outsourcing' element={<Layout><PayRoll/></Layout>}/>
      <Route path='/manpower_outsourcing' element={<Layout><ManPower/></Layout>}/>
      <Route path='/login' element={<Layout><Login/></Layout>}/>
      <Route path='/employed-dashboard' element={<Layout><EmployeDashBorad/></Layout>}/>
      <Route path='/my-jobs' element={<Layout><MyJobs/></Layout>}/>
      <Route path='/Personal-profile' element={<Layout><PersonalProfile/></Layout>}/>
      <Route path='/work-experience' element={<Layout><WorkExperince/></Layout>}/>
      <Route path='/education' element={<Layout><Education/></Layout>}/>
      <Route path='/offer-letter' element={<Layout><OfferLetter/></Layout>}/>
    </Routes>
  )
}

export default App