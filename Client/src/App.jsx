import React from 'react'
import { Header,Footer } from './Components/export';
import {Home,FindATalent, FindAJob, About, Contact, SkillDevelopment, GetJob, JobDetails, StaffPlacement, PayRoll, ManPower, EmployeDashBorad, PersonalProfile, WorkExperince, Education, OfferLetter,EditPersonalProfile,JobPosting,Candidate,CompanyDetails, EmployeeLogin,EmployerLogin,UpdateWorkingExprince,EditEducation,Dashboard,DasboardWork,DashboardEducation,DashboardPeronalProfile, PasswordChange,MyjobsList, TipsSupport, JobDetali} from './Pages/export'
import {MyJob} from './Components/export';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({ children }) => (

  <>
    <Header />
    {children}
    <Footer />
  </>
);
function App() {

  return (
   <>
     <ToastContainer />
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
      <Route path='/employee-login' element={<Layout><EmployeeLogin/></Layout>}/>
      <Route path='/employe-profile-compleateness' element={<Layout><EmployeDashBorad/></Layout>}/>
     
      <Route path='/Personal-profile' element={<Layout><PersonalProfile/></Layout>}/>
      <Route path='/work-experience' element={<Layout><WorkExperince/></Layout>}/>
      <Route path='/education' element={<Layout><Education/></Layout>}/>
     
      <Route path='/edit-personal-profile' element={<Layout><EditPersonalProfile isShow={true}/></Layout>}/>
      <Route path='/update-working-exprince' element={<Layout><UpdateWorkingExprince/></Layout>}/>
      <Route path='/update-education' element={<Layout><EditEducation/></Layout>}/>
      {/* employer's route */}
      <Route path='/employer-Job-posting' element={<Layout><JobPosting/></Layout>}/>
      <Route path='/employer-requirement-candidate' element={<Layout><Candidate/></Layout>}/>
      <Route path='/employer-Company-Details' element={<Layout><CompanyDetails/></Layout>}/>
      <Route path='/employer-login' element={<Layout><EmployerLogin/></Layout>}/>
      {/* Dashboard layout */}
      <Route path='/Dashboard/personal-profile' element={<Layout><Dashboard navtag={'Personal Profile'}><DashboardPeronalProfile/></Dashboard></Layout>}/>
      <Route path='/Dashboard/work-experience' element={<Layout><Dashboard navtag={'work Experience'}><DasboardWork/></Dashboard></Layout>}/>
      <Route path='/Dashboard/education' element={<Layout><Dashboard navtag={'Education'}><DashboardEducation/></Dashboard></Layout>}/>
      <Route path='/Dashboard/offer-letter' element={<Layout><Dashboard navtag={'Offer Letter'}><OfferLetter/></Dashboard></Layout>}/>
      <Route path='/Dashboard/setting' element={<Layout><Dashboard navtag={'setting'}><PasswordChange/></Dashboard></Layout>}/>
      <Route path='/Dashboard/tips-support' element={<Layout><Dashboard navtag={'setting'}><TipsSupport/></Dashboard></Layout>}/>
      {/* for my jobs */}
      <Route
  path='/Dashboard/jobs/my-jobs'
  element={
    <Layout>
      <Dashboard navtag={'My-Jobs'}>
        <MyJob>
          <MyjobsList/>
        </MyJob>
      </Dashboard>
    </Layout>
  }
/>
<Route
  path='/Dashboard/jobs/job-details'
  element={
    <Layout>
      <Dashboard navtag={'My-Jobs'}>
        <MyJob>
          <JobDetali/>
        </MyJob>
      </Dashboard>
    </Layout>
  }
/>





      

    </Routes>
   </>
  )
}

export default App