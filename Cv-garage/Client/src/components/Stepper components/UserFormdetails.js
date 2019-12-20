import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class UserFormdetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Personal Information" />
          <TextField
            hintText="enter your first name"
            floatingLabelText="first name"
            onChange={handleChange("firstname")}
            Value={values.firstname}
          />
          <br />
          <TextField
            hintText="enter your last name"
            floatingLabelText="last name"
            onChange={handleChange("lastname")}
            Value={values.lastname}
          />

          {/* <TextField
            hintText="enter your last name"
            floatingLabelText="last name"
            onChange={handleChange("lastname")}
            defaultValue={values.lastname}
          /> */}
          <br />
          <TextField
            hintText="enter your email"
            floatingLabelText="email"
            onChange={handleChange("email")}
            Value={values.email}
          />
          <br />
          <TextField
            hintText="enter your phone"
            floatingLabelText="phone"
            onChange={handleChange("phone")}
            Value={values.phone}
          />
          <br />
          <TextField
            hintText="enter your address"
            floatingLabelText="address"
            onChange={handleChange("address")}
            defaultValue={values.address}
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

export default UserFormdetails;
