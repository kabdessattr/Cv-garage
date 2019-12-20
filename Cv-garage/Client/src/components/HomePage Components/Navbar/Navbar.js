import React, { Fragment, useState } from "react";
import "../../../Pages/SignUp Page/index.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
       <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        <Button style={{ color: "white" }}> <i className="fas fa-chalkboard-teacher"> </i>
          <span className="hide-sm"> {"  "} Dashboard </span>
        </Button>
      </Link>
      <Link to="/SignIn" style={{ color: "white", textDecoration: "none" }}>
        
        <Button style={{ color: "white" }} onClick={logout}>
          {" "}
          <i className="fas fa-sign-out-alt"> </i>{" "}
          <span className="hide-sm"> Logout </span>{" "}
        </Button>
      </Link>
    </div>
  );

  const guestLinks = (
    <div>
      <Link to="/SignIn" style={{ color: "white", textDecoration: "none" }}>
        <Button style={{ color: "white" }}>Login</Button>
      </Link>
      <Link to="/SignUp" style={{ color: "white", textDecoration: "none" }}>
        <Button style={{ color: "white" }}>Create Account</Button>
      </Link>
    </div>
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "#2A4466",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Typography className={classes.title} variant="h6" noWrap>
              CV Garage
            </Typography>
          </Link>

          {!loading && (
            <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
