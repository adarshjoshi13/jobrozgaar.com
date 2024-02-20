const jwt = require('jsonwebtoken');

function isTokenExpired(token) {
  const decodedToken = jwt.decode(token, { complete: true });
  if (!decodedToken || !decodedToken.payload.exp) {
      return true; // Token is invalid or does not have an expiration time
  }

  const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
  return decodedToken.payload.exp < currentTime;
}

function GetUserIdFromCookie(cookie){
  console.log('get it',cookie)
    if (!cookie) {
        return null
      }
  
       
      if(isTokenExpired(cookie)){
        console.log('verify')
        return null
      }
     try {
      const decodedToken = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
      console.log('ho ch=uka veiry',decodedToken)

   
      const userId = decodedToken.employeeId;
  
      return userId
     } catch (error) {
      console.log("jwt error",error)
      return null
     }

    
};

function GetEmployerIdFromCookie(cookie,){
  console.log('get it',cookie)
    if (!cookie) {
        return null
      }

      if(isTokenExpired(cookie)){
        console.log('expire',cookie)
        return null
      }
    try {
      const decodedToken = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

   
      const userId = decodedToken.employerId;
  
      return userId
    } catch (error) {
      console.log("jwt error in employer",error)
      return null
    }

    
};

module.exports = {GetUserIdFromCookie,GetEmployerIdFromCookie,isTokenExpired}