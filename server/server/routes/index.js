var express = require('express');
var router = express.Router();
const {SignIn,SignUP,logout,GoogleAUth,verifyUser,} = require('../API/Controlers/Auth.controler')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', SignUP);
router.post('/sign-in',SignIn);
router.get('/logout',logout);
router.get('/oauth/google',GoogleAUth);
router.get('/verify',verifyUser);

module.exports = router;
