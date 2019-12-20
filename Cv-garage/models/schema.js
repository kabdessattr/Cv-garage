const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaGeneral = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  universityName: { type: String },
  degreeType: { type: String },
  academicDateFrom: { type: String },
  academicDateTo: { type: String },
  devLanguages: { type: String },
  devTechnologies: { type: String },
  projectName: { type: String },
  description: { type: String },
  details: { type: String },
  projectDateFrom: { type: String },
  projectDateTo: { type: String },
  experienceName: { type: String },
  companyWhere: { type: String },
  experienceSummary: { type: String },
  experienceTask: { type: String },
  experienceDateFrom: { type: String },
  experienceDateTo: { type: String },
  certificationIssuer: { type: String },
  certificationDate: { type: String },
  driversLicense: { type: String },
  dateOfBirth: { type: String },
  languageSkills: { type: String },
  Hobbies: { type: String }
});

module.exports = General = mongoose.model("general", SchemaGeneral);
