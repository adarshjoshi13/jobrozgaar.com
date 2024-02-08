const mongooseConnect = require('../Config/mongo.config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User Schema
const employeeIntialData = new mongooseConnect.Schema({
  firstName: {
    type: String,
    required:[true, "name cannot be empty"],
  },
  email: {
    type: String,
    required:[true, "email cannot be empty"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
    minlength: [8, 'Password should be at least 8 characters long'],
  },
  mobile:{
  type:Number
  },
  profilePicture:{
    type:String,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  isVerified:{
    type : Boolean ,
    default:false
  },
  provider: {
    type: String,
    required: true,
    enum: ['local', 'google', 'another_oauth_provider']
  },
  check:Boolean,
  refershToken:String,
  ProfileCompleate:{
    type:Number,
    default:10
  },
  AdditionalUserinfo:{
    PersonalDetails:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"PersonalProfile"
    },
    WorkingExperiences:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"WorkingExperience"
      },


  }
});
employeeIntialData.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
  next();
});



const employeeIntialdata = mongoose.model('employeeIntialData',  employeeIntialData);


module.exports =  employeeIntialdata;
