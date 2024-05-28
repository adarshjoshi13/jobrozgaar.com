const mongooseConnect = require('../../Config/mongo.config');
const mongoose = require('mongoose');

const JobDetails = new mongooseConnect.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'EmployerIntialData'
  },
  
  wantToHire: {
    type: String,
    required: [true, "want to hire can't be empty"]
  },
  NoOfVacancy: {
    type: String,
    required: [true, "Please provide No. of Vacancy"]
  },
  JobTitle: {
    type: String,
    // enum: ['Single', 'Married'],
    required: [true, "Job Title can't be empty"]
  },
  JobType: {
    type: String,
    // enum: ["Full Time","Part Time","Contract","Freelance","Temporary"],
    required: [true, "Job type can't be empty"]
  },
  Gender:{
    type :String
  },
  religion: {
    type: String
  },
  SalaryRange: {
    minimum:{
        type: String,
    // required: [true, ' minimum sallery is required']
    },
    maximum:{
        type: String,
        // required: [true, ' maximum sallery is required']
    },
    
  },
  WorkingShift:{
    type: String
},
WorkTiming:{
    type:String
},
JobLocation:{
    city:{
        type:String,
        required:[true,"city name in job location can't be empty"]
    },
    state:{
        type:String,
        required:[true,"state name in job location can't be empty"]
    }
},
candidateDetails:{
  MinimumQualification:String,
  PreferredSkills:Array,
  LanguageKnown:Array,
  AdharCard:Boolean,
  PanCard: Boolean,
  DrivingLicense:Boolean,
  passport:Boolean,
  Phone:Boolean,
  Laptop:Boolean,
  Bike:Boolean,
  Car:Boolean
},
createdAt: {
  type: Date,
  default: Date.now
},

});
const jobDetails = mongooseConnect.model('JobDetail', JobDetails);


module.exports = jobDetails;
