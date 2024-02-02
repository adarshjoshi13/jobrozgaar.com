const jwt = require('jsonwebtoken');

function GetUserIdFromCookie(cookie){
  // console.log('get it',cookie)
    if (!cookie) {
        return null
      }
      const decodedToken = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

   
    const userId = decodedToken.employeeId;

    return userId

    
};

function GetEmployerIdFromCookie(cookie,){
  console.log('get it',cookie)
    if (!cookie) {
        return null
      }
      const decodedToken = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

   
    const userId = decodedToken.employerId;

    return userId

    
};

module.exports = {GetUserIdFromCookie,GetEmployerIdFromCookie}