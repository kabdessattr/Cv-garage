const express = require("express");
const router = express.Router();
const General = require("../models/schema");

// API Get user
//@Route localhost:5000//contactlist
//@access Public
router.get("/cv1", async (req, res) => {
  try {
    const data = await General.find();
    res.json(data);
  } catch (error) {
    res.send(err);
  }
});
// API Get user by id
//@Route localhost:5000//contactlist
//@access Public

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   General.findOne({ _id: id })
//     .then(data => res.json(data))
//     .catch(err => res.send(err));
// });

// API add new user
//@Route localhost:5000//contactlist
//@access Public
router.post("/cv1", (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    universityName,
    degreeType,
    academicDateFrom,
    academicDateTo,
    devLanguages,
    devTechnologies,
    projectName,
    description,
    details,
    projectDateFrom,
    projectDateTo,
    experienceName,
    companyWhere,
    experienceSummary,
    experienceTask,
    experienceDateFrom,
    experienceDateTo,
    certificationIssuer,
    certificationDate,
    driversLicense,
    dateOfBirth,
    languageSkills,
    Hobbies
  } = req.body;
  const newGeneral = new General({
    firstname,
    lastname,
    email,
    phone,
    address,
    universityName,
    degreeType,
    academicDateFrom,
    academicDateTo,
    devLanguages,
    devTechnologies,
    projectName,
    description,
    details,
    projectDateFrom,
    projectDateTo,
    experienceName,
    companyWhere,
    experienceSummary,
    experienceTask,
    experienceDateFrom,
    experienceDateTo,
    certificationIssuer,
    certificationDate,
    driversLicense,
    dateOfBirth,
    languageSkills,
    Hobbies
  });
  newGeneral
    .save()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});
// API remove user
//@Route localhost:5000//contactlist
//@access Public
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  General.findOneAndDelete({ _id: id })
    .then(() => res.json({ msg: "deleted" }))
    .catch(err => res.send(err));
});
// API update user
//@Route localhost:5000//contactlist
//@access Public
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    universityName,
    degreeType,
    academicDateFrom,
    academicDateTo,
    devLanguages,
    devTechnologies,
    projectName,
    description,
    details,
    projectDateFrom,
    projectDateTo,
    experienceName,
    companyWhere,
    experienceSummary,
    experienceTask,
    experienceDateFrom,
    experienceDateTo,
    certificationIssuer,
    certificationDate,
    driversLicense,
    dateOfBirth,
    languageSkills,
    Hobbies
  } = req.body;

  General.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        firstname,
        lastname,
        email,
        phone,
        address,
        universityName,
        degreeType,
        academicDateFrom,
        academicDateTo,
        devLanguages,
        devTechnologies,
        projectName,
        description,
        details,
        projectDateFrom,
        projectDateTo,
        experienceName,
        companyWhere,
        experienceSummary,
        experienceTask,
        experienceDateFrom,
        experienceDateTo,
        certificationIssuer,
        certificationDate,
        driversLicense,
        dateOfBirth,
        languageSkills,
        Hobbies
      }
    }
  )
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
