const mongooseConnect = require('../../Config/mongo.config');
const mongoose = require('mongoose');

const CompanyDetails = new mongooseConnect.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EmployerIntialData',
    required: true,
    unique:true
  },
  
  CompanyInformation: {
    companyName:{
        type: String,
        required: [true, "Company Name can't be empty"]
      },
      Recruiter:{
        type: String,
        required: [true, "Recruiter's Name can't be empty"]
      },
      HrWhatsAppNo:{
        type: String,
        required: [true, "HR's Whats's App No can't be empty"]
      },
      Email:{
        type :String,
        required: [true, "HR's Whats's App No can't be empty"]
      },
      ComapnyAdress:{
        type :String,
        required: [true, "Company Adress can't be empty"]
      }
  },
  InterviewAddress:{
    FlatNo:{
        type: String,
        required: [true, "Bulding No/flat no  adress can't be empty"]
      },
      city:{
        type: String,
        required: [true, "City Name can't be empty"]
      },
      State:{
        type: String,
        required: [true, "State Name can't be empty"]
      },
      Landmark:{
        type: String,
        required: [true, "Land Mark can't be empty"]
      },
  },
  CompanyVerification:{
    DocumentNo:{
     type: String,
     required: [true, " Document Number can't be empty"]
   },
   Logo:{
     type: String,
     required: [true, "Logo is required"]
   },
   CompanyVerfiaction:{
    type: String,
    required: [true, " Company Verfiaction Number is required"]
   },
   PanNo:{
    type: String,
    required: [true, "Pan Number is required"]
   },
   GstNo:{
    type: String,
    required: [true, "Pan Number is required"]
   }
   },
 companyAndInterviewAdressSame:{
    type:Boolean,
    default:false
   }


});

const  companyDetails  = mongooseConnect.model('CompanyDetails',  CompanyDetails );

module.exports =   companyDetails ;
