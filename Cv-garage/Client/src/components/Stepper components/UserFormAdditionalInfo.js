import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class UserFormAdditionalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Additional Information" />
          <TextField
            hintText="Do you have a driver's license"
            floatingLabelText="Type 'Yes' or 'No'"
            onChange={handleChange("driversLicense")}
            defaultValue={values.driversLicense}
          />
          <br />
          <TextField
            hintText="in numbers like 00-00-0000"
            floatingLabelText="What is your date of birth"
            onChange={handleChange("dateOfBirth")}
            defaultValue={values.dateOfBirth}
          />
          <br />
          <TextField
            hintText="Please enter your language skills"
            floatingLabelText="Type language and then 'good' or 'average' or 'beginner'"
            onChange={handleChange("languageSkills")}
            defaultValue={values.languageSkills}
          />
          <br />
          <TextField
            hintText="Name some of your hobbies"
            floatingLabelText="What are your hobbies?"
            onChange={handleChange("Hobbies")}
            defaultValue={values.Hobbies}
          />
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 20,
    marginLeft: 100
  }
};

export default UserFormAdditionalInfo;
