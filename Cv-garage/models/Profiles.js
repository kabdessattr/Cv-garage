const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  bio: { type: String },
  driversLicense: { type: Boolean },
  dateOfBirth: { type: String },
  languageSkills: { type: [String] },
  Hobbies: { type: [String] },
  devLanguages: { type: [String] },
  devTechnologies: { type: [String] },
  academicInfo: [
    {
      universityName: { type: String },
      degreeType: { type: String },
      academicDateFrom: { type: String },
      academicDateTo: { type: String },
      current: {
        type: Boolean,
        default: false
      },
      description: { type: String }
    }
  ],
  projectsWorked: [
    {
      projectName: { type: String },
      description: { type: String },
      details: { type: String },
      projectDate: { type: String },
      current: { type: Boolean, default: false }
    }
  ],

  ProfessionalExperience: [
    {
      experienceName: { type: String },
      companyWhere: { type: String },
      experienceSummary: { type: String },
      experienceTask: { type: String },
      experienceDateFrom: { type: String },
      experienceDateTo: { type: String },
      current: { type: Boolean, default: false }
    }
  ],

  Certifications: [
    {
      certificationIssuer: { type: String },
      certificationDate: { type: String }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
