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

export class UserFormFormation extends Component {
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
          <AppBar title="Academic Information" />

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
              label="Next appointment"
              type="date"
              onChange={handleChange("academicDateFrom")}
              defaultValue={values.academicDateFrom}
            />
            <h5> To </h5>
            <TextField
              label="Next appointment"
              type="date"
              onChange={handleChange("academicDateTo")}
              defaultValue={values.academicDateTo}
            />

            <TextField
              hintText="Enter the University you studied in"
              floatingLabelText="The University you studied in"
              onChange={handleChange("universityName")}
              defaultValue={values.universityName}
            />
          </div>
          <br />
          <TextField
            hintText="enter the name of your degree"
            floatingLabelText="The name of your degree"
            onChange={handleChange("degreeType")}
            defaultValue={values.degreeType}
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

export default UserFormFormation;
