const axios = require('axios');
const qs = require('qs')
const employeeIntialdata = require('../Models/Employee.model');
const nodemailer = require('nodemailer')
async function GetGoogleAuthToken(code){
    const url = 'https://oauth2.googleapis.com/token';
    const values = {
        code,
        client_id: process.env.GOOGLECLIENTID,
        client_secret: process.env.GOOGLEZCLIENTSECREAT,
        redirect_uri: process.env.GOOGELREDIRECTURL,
        grant_type: "authorization_code"
    }
console.log(values)
    try {
        const res = await axios.post(url, qs.stringify(values), {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        });

        return res.data
    } catch (error) {
        console.error(error)
        console.error('failed to fetch googleAuthId',)
        throw new Error(error.message)
    }
}

async function fetchGoogleUserInfo(accessToken) {
    const url = 'https://www.googleapis.com/oauth2/v2/userinfo';
  
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Failed to fetch Google user info:', error.message);
      throw new Error('Failed to fetch Google user info');
    }
  }

  async function findUserByEmail(email) {
    try {
      const user = await employeeIntialdata.findOne({ email });
      return user; // If user is found, it will be returned; otherwise, null
    } catch (error) {
      console.error('Error finding user:', error.message);
      throw error;
    }
  }

 async  function Sendemail(name,email,user_id,route){
  
    try {
        const transporter = nodemailer.createTransport({
           host:'smtp.gmail.com',
           port:587,
           secure:false,
           requireTLS:true,

            auth: {
              user: 'vipulsemwal124@gmail.com', 
              pass: 'sxyv lrfb lkhs ksoa',
            },
          });
          const mailOptions = {
            from: process.env.email, 
            to: email,
            subject: 'Subject of the Email',
            html:  `<p>Hello ${name}, your verification link, please click here to <a href="http://localhost:3000/${route}?id=${user_id}">Verify</a> your mail</p>`,
          };
         const result = await  transporter.sendMail(mailOptions)
         console.log("result",result)
         if(result.accepted.length > 0){
            return true
         }
         else{
            return null
         }
    } catch (error) {
        console.log("eroror in sending mail",error)
       return null
    }

  }
module.exports = { GetGoogleAuthToken,fetchGoogleUserInfo,findUserByEmail,Sendemail }
