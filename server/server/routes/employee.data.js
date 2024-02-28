var express = require('express');
var router = express.Router();
const upload = require('../API/middleware/multer');
const PersonalProfile = require('../API/Models/employeePersonalProf.model')
const GetUserIdFromCookie = require('../API/Helper/getUserId');
const {AddPersonalProfile,EditPersonalProfile,getPersonalProfile,getInitailData,updateUserProiflePicture,WorkExprince,AddEducationDetails,UpdateWorkExprince,ChangePassword,GetRecommandJobs,GetJobByID,SaveJOb} = require('../API/Controlers/Employee')
const {CheckAuthMiddlewareForEmployee} = require('../API/middleware/CheckAuth')

router.post('/personal-profile',CheckAuthMiddlewareForEmployee,upload.any(),AddPersonalProfile );
router.put('/update-personal-profile',CheckAuthMiddlewareForEmployee,EditPersonalProfile);
router.get('/get-personal-profile',CheckAuthMiddlewareForEmployee,getPersonalProfile);
router.get('/get-intialdata',CheckAuthMiddlewareForEmployee,getInitailData);
router.put('/update-profile-pic',CheckAuthMiddlewareForEmployee,upload.any(),updateUserProiflePicture)
router.post('/work-experience',CheckAuthMiddlewareForEmployee,WorkExprince);
router.post('/education-details',CheckAuthMiddlewareForEmployee,AddEducationDetails)
router.put('/work-experience-update',CheckAuthMiddlewareForEmployee,UpdateWorkExprince);
router.put('/change-password',CheckAuthMiddlewareForEmployee,ChangePassword);
router.get('/recommanded-jobs',CheckAuthMiddlewareForEmployee,GetRecommandJobs);
router.get('/get-job-details/:id',GetJobByID)
router.post('/save-job/:id',CheckAuthMiddlewareForEmployee,SaveJOb)




module.exports = router;
