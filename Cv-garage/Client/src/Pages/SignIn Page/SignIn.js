import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from "../../actions/auth";
import Alert from "../../Layout/Alert/alert";
// import "../SignUp Page/index.css";
import { setAlert } from "../../actions/alert";


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

const SignIn=( {login, setAlert, isAuthenticated})=> {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password)
  };

// redirect if logged in

if(isAuthenticated) {
  return <Redirect to="/dashboard" />
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate>
        <Alert />
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
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e => onChange(e)}
            value={password}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => onSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            <Link to="/">
                <a href="#" variant="body2">
                  {"Go back to home page"}
                </a>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                <a href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </a>
              </Link>

             
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {login, setAlert}) (SignIn);