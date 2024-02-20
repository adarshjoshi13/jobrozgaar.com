var express = require('express');
var router = express.Router();
const{Signup,verifyUser,SignIn,VerifyAuthentication} = require('../API/Controlers/Employer/EmployerAuth');
const { sign } = require('jsonwebtoken');
const {JobDetails,AddcandidateDetails,AddCompanyDetails,GetAllDataOfEmployer,ChangeLogo,DeleteJOb} = require('../API/Controlers/Employer/Employer');
const upload = require('../API/middleware/multer')

router.post('/sign-up',Signup)
router.get('/verify-mail',verifyUser);
router.post('/sign-in',SignIn);
router.get('/verify-auth',VerifyAuthentication);




router.post('/job-details',JobDetails);
router.post('/candidate-requirement',AddcandidateDetails);
router.post('/company-details',upload.any(),AddCompanyDetails);
router.get('/get-employer-data',GetAllDataOfEmployer);
router.put('/update-logo',upload.any(),ChangeLogo);
router.delete('/delete-job/:jobId',DeleteJOb)


module.exports = router;
