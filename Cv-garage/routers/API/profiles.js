const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profiles");
const User = require("../../models/Users");

// @route GET api/profile/me
// @desc Get current users profile
// @access Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route GET api/profiles
// @desc create or update user profile
// @access Private

router.post(
  "/",
  [
    auth,
    [
      check("firstname", "firstname is required")
        .not()
        .isEmpty(),
      check("lastname", "lastname is required")
        .not()
        .isEmpty(),
      check("email", "email address is required")
        .not()
        .isEmpty(),
      check("phone", "Phone number is required")
        .not()
        .isEmpty(),
      check("address", "Home address is required")
        .not()
        .isEmpty(),
      check("languageSkills", "Language skills are required")
        .not()
        .isEmpty(),
      check("devLanguages", "Dev Languages are required")
        .not()
        .isEmpty(),
      check("devTechnologies", "dev Technologies are required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      lastname,
      email,
      phone,
      address,
      bio,
      driversLicense,
      dateOfBirth,
      languageSkills,
      Hobbies,
      devLanguages,
      devTechnologies
    } = req.body;

    // Buid profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (firstname) profileFields.firstname = firstname;
    if (bio) profileFields.bio = bio;
    if (driversLicense) profileFields.driversLicense = driversLicense;
    if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
    if (languageSkills) {
      profileFields.languageSkills = languageSkills
        .split(",")
        .map(skill => skill.trim());
    }
    if (Hobbies) {
      profileFields.Hobbies = Hobbies.split(",").map(hobby => hobby.trim());
    }
    if (devLanguages) {
      profileFields.devLanguages = devLanguages
        .split(",")
        .map(language => language.trim());
    }
    if (devTechnologies) {
      profileFields.devTechnologies = devTechnologies
        .split(",")
        .map(tech => tech.trim());
    }
    if (lastname) profileFields.lastname = lastname;
    if (email) profileFields.email = email;
    if (phone) profileFields.phone = phone;
    if (address) profileFields.address = address;

    // update

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      // create

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET api/profiles
// @desc Get all profiles
// @access Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route GET api/profiles/user/:user_id
// @desc Get profile by user ID
// @access Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);

    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectID") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("server error");
  }
});

// @route DELETE api/profiles
// @desc Delete profile and user
// @access Public

router.delete("/", auth, async (req, res) => {
  try {
    // remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route PUT api/profiles/experience
// @desc  Add profile experience
// @access Private

router.put(
  "/professionalexperience",
  [
    auth,
    [
      check("experienceName", "Job title is required")
        .not()
        .isEmpty(),
      check("companyWhere", "Hosting company name is required")
        .not()
        .isEmpty(),
      check("experienceSummary", "Summary of the job is required")
        .not()
        .isEmpty(),
      check("experienceTask", "Tasks of the job are required")
        .not()
        .isEmpty(),
      check("experienceDateFrom", "Starting date is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      experienceName,
      companyWhere,
      experienceSummary,
      experienceTask,
      experienceDateFrom,
      experienceDateTo,
      current
    } = req.body;

    const newExp = {
      experienceName,
      companyWhere,
      experienceSummary,
      experienceTask,
      experienceDateFrom,
      experienceDateTo,
      current
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.ProfessionalExperience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE api/profiles/experience
// @desc  Delete profile experience
// @access Private

router.delete("/professionalexperience/:exp_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.ProfessionalExperience.map(
      item => item.id
    ).indexOf(req.params.exp_id);

    profile.ProfessionalExperience.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {}
});

// @route PUT api/profiles/academicInfo
// @desc  Add profile academicInfo
// @access Private

router.put(
  "/academicInfo",
  [
    auth,
    [
      check("universityName", "University name is required")
        .not()
        .isEmpty(),
      check("degreeType", "Degree type is required")
        .not()
        .isEmpty(),
      check("description", "Description of the degree is required")
        .not()
        .isEmpty(),
      check("academicDateFrom", "University starting date is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      universityName,
      degreeType,
      academicDateFrom,
      academicDateTo,
      current,
      description
    } = req.body;

    const newEdu = {
      universityName,
      degreeType,
      academicDateFrom,
      academicDateTo,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.academicInfo.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE api/profiles/academicinfo
// @desc  Delete profile academic information
// @access Private

router.delete("/academicInfo/:edu_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.academicInfo
      .map(item => item.id)
      .indexOf(req.params.edu_id);

    profile.academicInfo.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {}
});

// @route PUT api/profiles/projectsWorked
// @desc  Add profile projects Worked
// @access Private

router.put(
  "/projectsWorked",
  [
    auth,
    [
      check("projectName", "Project name is required")
        .not()
        .isEmpty(),
      check("details", "details for the project are required")
        .not()
        .isEmpty(),
      check("description", "Description of the project is required")
        .not()
        .isEmpty(),
      check("projectDate", "Project date is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      projectName,
      details,
      projectDate,
      current,
      description
    } = req.body;

    const newProj = {
      projectName,
      details,
      projectDate,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.projectsWorked.unshift(newProj);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE api/profiles/projectsWorked
// @desc  Delete profile PROJECT information
// @access Private

router.delete("/projectsWorked/:proj_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.projectsWorked
      .map(item => item.id)
      .indexOf(req.params.proj_id);

    profile.projectsWorked.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {}
});

// @route PUT api/profiles/certifications
// @desc  Add profile certifications
// @access Private

router.put(
  "/Certifications",
  [
    auth,
    [
      check("certificationIssuer", "Certification issuer & name is required")
        .not()
        .isEmpty(),
      check(
        "certificationDate",
        "The date you acquired the certification is required"
      )
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { certificationIssuer, certificationDate } = req.body;

    const newCertif = {
      certificationIssuer,
      certificationDate
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.Certifications.unshift(newCertif);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE api/profiles/Certifications
// @desc  Delete profile certification
// @access Private

router.delete("/Certifications/:certif_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.Certifications.map(item => item.id).indexOf(
      req.params.certif_id
    );

    profile.Certifications.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {}
});

module.exports = router;
