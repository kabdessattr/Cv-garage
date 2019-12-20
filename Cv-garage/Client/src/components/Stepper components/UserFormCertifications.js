import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class UserFormCertifications extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Certifications" />
          <TextField
            hintText="enter your certification title and issuer name"
            floatingLabelText="Certification Title and Issuer"
            onChange={handleChange("certificationIssuer")}
            defaultValue={values.certificationIssuer}
          />
          <br />
          <TextField
            hintText="enter the date you acquired the certification"
            floatingLabelText="Certification date"
            onChange={handleChange("certificationDate")}
            defaultValue={values.certificationDate}
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

export default UserFormCertifications;
