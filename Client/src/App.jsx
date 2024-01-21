import React from 'react'
import { Header,Footer } from './Components/export';
import {Home,FindATalent, FindAJob, About, Contact, SkillDevelopment, GetJob, JobDetails, StaffPlacement, PayRoll, ManPower} from './Pages/export'
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
    </Routes>
  )
}

export default App