import React, { Component } from "react";
import UserFormTechnicalSkills from "./UserFormTechnicalSkills";
import UserFormdetails from "./UserFormdetails";
import UserFormExperience from "./UserFormExperience";
import UserFormFormation from "./UserFormFormation";
import Confirme from "./Confirme";
import UserFormCertifications from "./UserFormCertifications";
import UserFormAdditionalInfo from "./UserFormAdditionalInfo";
import UserFormProjects from "./UserFormProjects";
import { addCV } from "../../actions/index";
import { connect } from "react-redux";

export class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    universityName: "",
    degreeType: "",
    academicDateFrom: "",
    academicDateTo: "",
    devLanguages: "",
    devTechnologies: "",
    projectName: "",
    description: "",
    details: "",
    projectDateFrom: "",
    projectDateTo: "",
    experienceName: "",
    companyWhere: "",
    experienceSummary: "",
    experienceTask: "",
    experienceDateFrom: "",
    experienceDateTo: "",
    certificationIssuer: "",
    certificationDate: "",
    driversLicense: "",
    dateOfBirth: "",
    languageSkills: "",
    Hobbies: ""
  };
  // next step

  submit = x => {
    this.props.addCV(this.state);
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handelChange
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

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
    } = this.state;

    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <UserFormdetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserFormExperience
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <UserFormFormation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <UserFormProjects
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 5:
        return (
          <UserFormTechnicalSkills
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <UserFormCertifications
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <UserFormAdditionalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Confirme
            nextStep={this.submit}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default connect(null, { addCV })(UserForm);
