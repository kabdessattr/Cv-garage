import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { Link, Route } from "react-router-dom";

export class Confirme extends Component {
  continue = e => {
    // e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
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
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstname} />
            <ListItem primaryText="Last Name" secondaryText={lastname} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Phone" secondaryText={phone} />
            <ListItem primaryText="Address" secondaryText={address} />
            <ListItem
              primaryText="Job Experience"
              secondaryText={experienceName}
            />
            <ListItem primaryText="Studies" secondaryText={universityName} />
            <ListItem
              primaryText="Technical Skills"
              secondaryText={devLanguages}
            />
          </List>
          <Link to="/cv1">
            <RaisedButton
              label="Confirm and Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </Link>
          <RaisedButton
            label="back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 20
  }
};

export default Confirme;
