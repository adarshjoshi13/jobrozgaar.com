var express = require('express');
var router = express.Router();
const upload = require('../API/middleware/multer');
const PersonalProfile = require('../API/Models/employeePersonalProf.model')
const GetUserIdFromCookie = require('../API/Helper/getUserId');
const {AddPersonalProfile,EditPersonalProfile,getPersonalProfile,getInitailData,updateUserProiflePicture,WorkExprince,AddEducationDetails,UpdateWorkExprince,ChangePassword} = require('../API/Controlers/Employee')
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



module.exports = router;
