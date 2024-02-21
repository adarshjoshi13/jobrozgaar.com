// for employee
const employeeIntialdata = require("../Models/Employee.model");
const employerIntialdata = require('../Models/Employer/EmployerInital')
const jwt = require("jsonwebtoken");
const { isTokenExpired,GetUserIdFromCookie } = require("../Helper/getUserId");

function decodeExpiredJWT(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken.employeeId;
}

function decodeExpiredJWTEmployer(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken.employerId;
}

async function CheckAuthMiddlewareForEmployee(req, res, next) {
    if (!req.cookies.token) {
      return res.status(401).json({ message: "You are not logged in to perform this action" });
    }
  
    const token = req.cookies.token;
    const refreshToken = req.cookies['refresh-token'];
  console.log('ye middle ware hain')
    if (isTokenExpired(token)) {
        console.log('mar gaya token')
      try {
        const id =  decodeExpiredJWT(token);
        const employee = await employeeIntialdata.findById(id);
        console.log('middleware se aya use',employee)
  
        if (!employee) {
          return res.status(404).json({ message: "User not found" });
        }
  
        const employeeRefreshToken = employee.refershToken; 
  
        if (refreshToken === employeeRefreshToken) {
          const accessToken = jwt.sign({ employeeId: employee._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'  });
          console.log('ye dkhe',accessToken)
          res.cookie('token', accessToken, {
            httpOnly: true,
          });
          next();
        } else {
          return res.status(401).json({ message: "Invalid refresh token" });
        }
      } catch (error) {
        console.log('Error verifying token in middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } else {
        console.log('abhi token zinda hain')
      next();
    }
  }

  async function  CheckAuthMiddlewareForEmployer(req, res, next) {
    if (!req.cookies.token) {
      return res.status(401).json({ message: "You are not logged in to perform this action" });
    }
  
    const token = req.cookies.token;
    const refreshToken = req.cookies['refresh-token'];
  console.log('ye middle ware hain')
    if (isTokenExpired(token)) {
        console.log('mar gaya token')
      try {
        const id =  decodeExpiredJWTEmployer(token);
        const employer = await employerIntialdata.findById(id);
        console.log('middleware se aya use',employer)
  
        if (!employer) {
          return res.status(404).json({ message: "user not found" });
        }
  
        const employerRefreshToken = employer.refershToken; 
  
        if (refreshToken === employerRefreshToken) {
          const accessToken = jwt.sign({ employerId: employer._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'  });
          console.log('ye dkhe',accessToken)
          res.cookie('token', accessToken, {
            httpOnly: true,
          });
          next();
        } else {
          return res.status(401).json({ message: "Invalid refresh token" });
        }
      } catch (error) {
        console.log('Error verifying token in middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } else {
        console.log('abhi token zinda hain')
      next();
    }
  }
  
  module.exports = {CheckAuthMiddlewareForEmployee,CheckAuthMiddlewareForEmployer}

