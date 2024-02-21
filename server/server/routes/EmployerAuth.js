var express = require('express');
var router = express.Router();
const{Signup,verifyUser,SignIn,VerifyAuthentication} = require('../API/Controlers/Employer/EmployerAuth');
const { sign } = require('jsonwebtoken');
const {JobDetails,AddcandidateDetails,AddCompanyDetails,GetAllDataOfEmployer,ChangeLogo,DeleteJOb} = require('../API/Controlers/Employer/Employer');
const upload = require('../API/middleware/multer')
const {CheckAuthMiddlewareForEmployer} = require('../API/middleware/CheckAuth')

router.post('/sign-up',Signup)
router.get('/verify-mail',verifyUser);
router.post('/sign-in',SignIn);
router.get('/verify-auth',CheckAuthMiddlewareForEmployer,VerifyAuthentication);




router.post('/job-details',CheckAuthMiddlewareForEmployer,JobDetails);
router.post('/candidate-requirement',CheckAuthMiddlewareForEmployer,AddcandidateDetails);
router.post('/company-details',CheckAuthMiddlewareForEmployer,upload.any(),AddCompanyDetails);
router.get('/get-employer-data',CheckAuthMiddlewareForEmployer,GetAllDataOfEmployer);
router.put('/update-logo',CheckAuthMiddlewareForEmployer,upload.any(),ChangeLogo);
router.delete('/delete-job/:jobId',CheckAuthMiddlewareForEmployer,DeleteJOb)


module.exports = router;
