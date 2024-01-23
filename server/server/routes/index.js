var express = require('express');
var router = express.Router();
const {SignIn,SignUP,logout} = require('../API/Controlers/Auth.controler')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign-up',SignUP);
router.get('/sign-in',SignIn);
router.get('/logout',logout);

module.exports = router;
