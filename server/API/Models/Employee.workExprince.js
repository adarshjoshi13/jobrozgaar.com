const mongooseConnect = require('../Config/mongo.config');
const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  year: { type: String, required: [true, "year is missing"] },
  month: { type: Number, required: [true, "month is missing"] },
  CompanyName: { type: String, required: [true, "company Name is missing"] },
  Designation: { type: String, required: [true, " Designation is missing"] },
  StartDate: { type: String, required: [true, "Start Date is missing"] },
  EndDate: { type: String, required: [true, "End date is missing"] },
});

const WorkExperience = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employeeIntialData',
    required: true,
    unique: true
  },
  
  Position: {
    type: String,
    required: [true, "Experience is required"],
    enum: ['Fresher', 'Experience'],
  },

  Experience: {
    type: [ExperienceSchema],
    validate: [
      {
        validator: function(experience) {
          // Agar 'Position' 'Experience' hai aur 'Experience' field diya gaya hai, toh koi error nahi aana chahiye
          if (this.Position === 'Experience') {
            return experience && experience.length > 0;
          }
          return true;
        },
        message: "Experience is required when Position is 'Experience'.",
      },
      {
        validator: function(experience) {
          // Agar 'Experience' field diya gaya hai, toh check karo ki jo required fields hain, woh missing toh nahi hain
          if (experience) {
            const missingFields = [];
            experience.forEach((exp, index) => {
              if (!exp.year) missingFields.push(`Experience[${index}].year`);
              if (!exp.month) missingFields.push(`Experience[${index}].month`);
              if (!exp.CompanyName) missingFields.push(`Experience[${index}].CompanyName`);
              if (!exp.Designation) missingFields.push(`Experience[${index}].Designation`);
              if (!exp.StartDate) missingFields.push(`Experience[${index}].StartDate`);
              if (!exp.EndDate) missingFields.push(`Experience[${index}].EndDate`);
            });

            // Agar kuch missing fields hain toh error aana chahiye
            return missingFields.length === 0 || `Fields within Experience are required: ${missingFields.join(', ')}.`;
          }
          return true;
        },
      }
    ]
  },

  LookingForJobs: {
    JobTitle: {
      type: String,
      required: [true, "Looking for Job Title is required for better suggestion"],
    },
    JobType: {
      type: String,
      required: [true, "Looking for Job Type is required for better suggestion"],
    }
  },
  Skills:{
    type:[],
    required:[true,"fill atleast one skill"]
  }
});

const WorkingExperience = mongooseConnect.model('WorkingExperience', WorkExperience);

module.exports = WorkingExperience;
