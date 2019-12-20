import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { Register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../../Layout/Alert/alert";
// import "../SignUp Page/index.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = ({ setAlert, Register, isAuthenticated }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      Register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} noValidate>
          <Alert />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="FirstName"
            label="Name"
            name="name"
            autoComplete="FirstName"
            autoFocus
            onChange={e => onChange(e)}
            value={name}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => onChange(e)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => onChange(e)}
            name="password"
            label="Password"
            type="password"
            value={password}
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            label="Confirm Password"
            type="password"
            id="ConfirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => onSubmit(e)}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  Register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, Register })(SignUp);
