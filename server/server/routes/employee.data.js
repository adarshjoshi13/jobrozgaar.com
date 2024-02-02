var express = require('express');
var router = express.Router();
const upload = require('../API/middleware/multer');
const PersonalProfile = require('../API/Models/employeePersonalProf.model')
const GetUserIdFromCookie = require('../API/Helper/getUserId');
const {AddPersonalProfile,EditPersonalProfile,getPersonalProfile,getInitailData,updateUserProiflePicture,WorkExprince,AddEducationDetails} = require('../API/Controlers/Employee')

router.post('/personal-profile',upload.any(),AddPersonalProfile );
router.put('/update-personal-profile',EditPersonalProfile);
router.get('/get-personal-profile',getPersonalProfile);
router.get('/get-intialdata',getInitailData);
router.put('/update-profile-pic',upload.any(),updateUserProiflePicture)
router.post('/work-experience',WorkExprince);
router.post('/education-details',AddEducationDetails)

module.exports = router;
