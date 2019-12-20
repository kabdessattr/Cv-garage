import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class UserFormTechnicalSkills extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Technical Skills" />
          <TextField
            hintText="enter the development languages you master"
            floatingLabelText="Dev Languages"
            onChange={handleChange("devLanguages")}
            defaultValue={values.devLanguages}
          />
          <br />
          <TextField
            hintText="enter the technologies you can work with"
            floatingLabelText="The technologies you master"
            onChange={handleChange("devTechnologies")}
            defaultValue={values.devTechnologies}
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

export default UserFormTechnicalSkills;
