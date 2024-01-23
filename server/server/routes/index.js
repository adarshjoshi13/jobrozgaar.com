var express = require('express');
var router = express.Router();
const {SignIn,SignUP} = require('../API/Controlers/Auth.controler')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sig-nup',SignUP);
router.post('sign-in',SignIn)

module.exports = router;
