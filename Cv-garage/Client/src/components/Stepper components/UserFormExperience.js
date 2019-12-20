import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import pickers from "material-ui/pickers";
//import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles(theme => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 200,
//     },
//   }));

export class UserFormExperience extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    // const classes = useStyles();
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Experience" />

          {/* <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="beginning"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </form> */}
          <TextField
            hintText="enter the title of the position your worked in"
            floatingLabelText="Position name"
            onChange={handleChange("experienceName")}
            Value={values.experienceName}
          />
          <br />
          <TextField
            hintText="Enter the company where you worked"
            floatingLabelText="Company's name"
            onChange={handleChange("companyWhere")}
            Value={values.companyWhere}
          />
          <br />
          <TextField
            hintText="enter the summary of the job you did"
            floatingLabelText="The summary of your job description"
            onChange={handleChange("experienceSummary")}
            Value={values.experienceSummary}
          />
          <br />
          <TextField
            hintText="enter the tasks you had to accomplish"
            floatingLabelText="The tasks you did in the job"
            onChange={handleChange("experienceTask")}
            Value={values.experienceTask}
          />
          <br />
          <TextField
            hintText="Enter the date of the beginning of your experience"
            floatingLabelText="the Starting Date"
            onChange={handleChange("experienceDateFrom")}
            Value={values.experienceDateFrom}
          />
          <br />
          <TextField
            hintText="Enter the date of the end of your experience"
            floatingLabelText="The finish date"
            onChange={handleChange("experienceDateTo")}
            Value={values.experienceDateTo}
          />
          

          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
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

export default UserFormExperience;
