const mongooseConnect = require('../../Config/mongo.config');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

// Define the User Schema
const EmployerIntialData = new mongooseConnect.Schema({
    CompanyName: {
    type: String,
    required:[true, " Company Name cannot be empty"],
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
  CompanyLogo:{
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
  CompanyDetails:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"CompanyDetails",
  },
  Jobs:{
    type:[ mongoose.Schema.Types.ObjectId]
  },
  ProfileCompleate:{
    type:Number,
    default:10
  },
  check:Boolean,
  refershToken:String,
});
EmployerIntialData.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
  next();
});
const employerIntialdata = mongoose.model('EmployerIntialData',  EmployerIntialData);


module.exports =  employerIntialdata;
