const mongooseConnect = require('../Config/mongo.config');
const mongoose = require('mongoose');

const personalProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employeeIntialData',
    required: true,
    unique:true
  },
  
  fatherName: {
    type: String,
    required: [true, "Father's name can't be empty"]
  },
  AboutMe:{
    type: String,
    required: [true, "About me can't be empty"]
  },
  DOB: {
    type: String,
    required: [true, "Please fill your date of birth"]
  },
  MaritalStatus: {
    type: String,
    // enum: ['Single', 'Married'],
    required: [true, "Marital status can't be empty"]
  },
  Gender: {
    type: String,
    // enum: ['Male', 'Female'],
    required: [true, "Gender can't be empty"]
  },
  religion: {
    type: String
  },
  CurrentAddress: {
    type: String,
    required: [true, 'Current address is required']
  },
  CurrentCity: {
    type: String,
    required: [true, 'City is required']
  },
  CurrentState: {
    type: String,
    required: [true, 'State is required']
  },
  PermanentAddress: {
    type: String,
    required: [true, 'Permanent Address is Required']
  },
  AdharCardPic:{
   type :String ,
   required:[true,'AdharCard picture Required']
  },
  PanCardPic :{
   type : String,
   required:[true,"Pan card picture is required"]
  },
  DrivingLicencePic:{
   type : String,
   required:[true,' DrivingLicence picture is required']
  },
  AdharNumber:{
    type:String,
    required:[true,'AdharNumber is required']
  },
  PanNumber:{
    type:String,
    required:[true,'PanNumber is required']
  },
  DrivingLicenceNumber:{
    type:String,
    required:[true,'DrivingLicenceNumbe is required']
  },
  update:{
    type:Boolean,
    default:true
  },
  Education: {
    MyQualification: String,
    LanguageKnown: String,
    Courses: {
      type: [
        {
          Course: String,
          University: String,
          YearOfPassing: String,
          TotalMarks: String,
          MarkObtain: String,
          Percentage: String
        },
      ],
      default: function () {
        if (this.MyQualification || this.LanguageKnown) {
          return [];
        }
        return undefined;
      },
    }
  }

});

const PersonalProfile = mongooseConnect.model('PersonalProfile', personalProfileSchema);

module.exports = PersonalProfile;
