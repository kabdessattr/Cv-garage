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

export class UserFormProjects extends Component {
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
          <AppBar title="Projects Done" />

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
          <div>
            <h5> From </h5>
            <TextField
              label="Enter the date of beginning of the project"
              type="date"
              onChange={handleChange("projectDateFrom")}
              defaultValue={values.projectDateFrom}
            />
            <h5> To </h5>
            <TextField
              label="Enter the date of the end of the project"
              type="date"
              onChange={handleChange("projectDateTo")}
              defaultValue={values.projectDateTo}
            />

            <TextField
              hintText="Enter the name of the project you did"
              floatingLabelText="The project's name"
              onChange={handleChange("projectName")}
              defaultValue={values.projectName}
            />
          </div>
          <br />
          <TextField
            hintText="enter the project description"
            floatingLabelText="Project's description"
            onChange={handleChange("description")}
            defaultValue={values.description}
          />
          <br />
          <TextField
            hintText="enter the project details"
            floatingLabelText="Project's details"
            onChange={handleChange("details")}
            defaultValue={values.details}
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

export default UserFormProjects;
