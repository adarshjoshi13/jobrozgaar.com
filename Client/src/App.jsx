import React from 'react'
import { Header, Footer, FeaturedJobs, ApplyProcessArea, JobDescription } from './Components/export';
import { Home, FindATalent, FindAJob, About, Contact, SkillDevelopment, GetJob, JobDetails, StaffPlacement, PayRoll, ManPower, EmployeDashBorad, PersonalProfile, WorkExperince, Education, OfferLetter, EditPersonalProfile, JobPosting, Candidate, CompanyDetails, EmployeeLogin, EmployerLogin, UpdateWorkingExprince, EditEducation, Dashboard, DasboardWork, DashboardEducation, DashboardPeronalProfile, PasswordChange, MyjobsList, TipsSupport, JobDetali, EmployerDashboard, WorkersCard, ViewCompanyDetails, JOblayout, AddJob ,ViewJob, EmployerViewPost,EmployerProtectedRoute,EmployeeProtectedRoute } from './Pages/export'
import { MyJob } from './Components/export';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlanPage from './Pages/Employer/PlanPage/PlanPage';




const Layout = ({ children }) => (

  <>
    <Header />
    {children}
    <ApplyProcessArea/>
    <Footer />
  </>
);
function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/find-a-talent' element={<Layout><FindATalent /></Layout>} />
        <Route path='/find-a-job' element={<Layout><FindAJob /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
        <Route path='/skill-development' element={<Layout><SkillDevelopment /></Layout>} />
        <Route path='/get-job' element={<Layout><GetJob /></Layout>} />
        <Route path='/job-details' element={<Layout><JobDetails /></Layout>} />
        <Route path='/staff-placement' element={<Layout><StaffPlacement /></Layout>} />
        <Route path='/payroll_outsourcing' element={<Layout><PayRoll /></Layout>} />
        <Route path='/manpower_outsourcing' element={<Layout><ManPower /></Layout>} />
        <Route path='/employee-login' element={<Layout><EmployeeLogin /></Layout>} />
        <Route path='/employe-profile-compleateness' element={
          <EmployeeProtectedRoute CMP={
            <Layout><EmployeDashBorad /></Layout>
          } Dashboard={false}/>
        } />

        <Route path='/Personal-profile' element={
          <EmployeeProtectedRoute CMP={
            <Layout><PersonalProfile /></Layout>
          } Dashboard={false}/>
        } />
        <Route path='/work-experience' element={<EmployeeProtectedRoute CMP={
          <Layout><WorkExperince /></Layout>
        } Dashboard={false}/>} />
        
        <Route path='/education' element={<EmployeeProtectedRoute CMP={
        <Layout><Education /></Layout>
        } Dashboard={false}/>} />

        <Route path='/edit-personal-profile' element={<EmployeeProtectedRoute CMP={
          <Layout><EditPersonalProfile isShow={true} /></Layout>
        } Dashboard={false}/>} />
        <Route path='/update-working-exprince' element={<EmployeeProtectedRoute CMP={
          <Layout><UpdateWorkingExprince /></Layout>
        } Dashboard={false}/>} />
        <Route path='/update-education' element={
          <EmployeeProtectedRoute CMP={
            <Layout><EditEducation /></Layout>
          } Dashboard={false}/>
        } />
        
        {/* employer's route */}
        <Route path='/employer-Company-Details' element={<EmployerProtectedRoute CMP={
          <Layout><CompanyDetails /></Layout>
        } Dashboard={false}/>} />

        <Route path='/employer-plans' element={
          <EmployerProtectedRoute CMP={
            <Layout><PlanPage /></Layout>
          } Dashboard={false}/>
        } />

        <Route path='/employer-login' element={<Layout><EmployerLogin /></Layout>} />
        {/* Dashboard layout for employee */}
        <Route path='/Dashboard/personal-profile' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'Personal Profile'}><DashboardPeronalProfile /></Dashboard></Layout>
          } Dashboard={true}/>
        } />
       
        <Route path='/Dashboard/work-experience' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'work Experience'}><DasboardWork /></Dashboard></Layout>
          }   Dashboard={true} />
        } />
        
        
        <Route path='/Dashboard/education' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'Education'}><DashboardEducation /></Dashboard></Layout>
          } Dashboard={true}/>
        } />
        
        
        <Route path='/Dashboard/offer-letter' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'Offer Letter'}><OfferLetter /></Dashboard></Layout>
          }   Dashboard={true} />
        } />
        
        
        <Route path='/Dashboard/setting' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'setting'}><PasswordChange /></Dashboard></Layout>
          }  Dashboard={true} />
        } />
       
       
        <Route path='/Dashboard/tips-support' element={
          <EmployeeProtectedRoute CMP={
            <Layout><Dashboard navtag={'Tips & Support'}><TipsSupport /></Dashboard></Layout>
          } Dashboard={true}/>
        } />
        {/* for my jobs */}
        <Route
          path='/Dashboard/jobs/my-jobs'
          element={
           <EmployeeProtectedRoute CMP={
            <Layout>
            <Dashboard navtag={'My-Jobs'}>
              <MyJob>
                <MyjobsList />
              </MyJob>
            </Dashboard>
          </Layout>
           } Dashboard={true}/>
          }
        />
        <Route
          path='/Dashboard/jobs/job-details'
          element={
            <EmployeeProtectedRoute CMP={
              <Layout>
              <Dashboard navtag={'My-Jobs'}>
                <MyJob>
                  <JobDetali />
                </MyJob>
              </Dashboard>
            </Layout>
            } Dashboard={true}/>
          }
        />

        {/*Dashboard of employer */}
        <Route path='/employer-starter-Dashboard/view-candidates' element={<EmployerProtectedRoute CMP={
          <Layout>
          <EmployerDashboard>

            <WorkersCard />
          </EmployerDashboard>
        </Layout>
        } Dashboard={true}/>} />

        <Route path='/employer-starter-Dashboard/view-company-details' element={<EmployerProtectedRoute CMP={
          <Layout>
          <EmployerDashboard>
            <ViewCompanyDetails />
          </EmployerDashboard>
        </Layout>
        }  Dashboard={true}/>} />

        <Route path='/employer-starter-Dashboard/view-plans' element={<EmployerProtectedRoute CMP={
          <Layout>
          <EmployerDashboard>
            <PlanPage />
          </EmployerDashboard>
        </Layout>
        } Dashboard={true}/>} />

        {/* JOb layout for employer started */}
        <Route path='/employer-starter-Dashboard/view-job' element={
          <EmployerProtectedRoute CMP={
            <Layout>
          <EmployerDashboard>
            <JOblayout navtag={'View All Job'}>
              <ViewJob />
            </JOblayout>
          </EmployerDashboard>
        </Layout>
          } Dashboard={true}/>
        } />


        <Route path='/employer-starter-Dashboard/view-job/post' element={
          <EmployerProtectedRoute CMP={
            <Layout>
          <EmployerDashboard>
            <JOblayout navtag={'View All Job'}>
              <JobDescription/>
            </JOblayout>
          </EmployerDashboard>
        </Layout>
          } Dashboard={true}/>
        } />


        

        <Route path='/employer-starter-Dashboard/Add-job' element={
          <EmployerProtectedRoute CMP={
            <Layout>
          <EmployerDashboard>
            <JOblayout navtag={"Add job"}>
              <AddJob />
            </JOblayout>
          </EmployerDashboard>
        </Layout>
          } Dashboard={true}/>
        } />













      </Routes>
    </>
  )
}

export default App