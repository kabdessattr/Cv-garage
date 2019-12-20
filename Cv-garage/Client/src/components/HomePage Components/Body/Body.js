import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import mahran from "../../../mahran.jpg";
import bilel from "../../../bilel.jpg";
import khaled from "../../../khaled.jpg";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

const Body = ({isAuthenticated}) => {

  const classes = useStyles();

  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }


  return (
    <Grid style={{ backgroundColor: "#f2f5fa" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 150
        }}
      >
        <Typography
          variant="h3"
          style={{
            PaddingTop: 10,
            textAlign: "center",
            fontWeight: 600,
            color: "#2196f3"
          }}
        >
          Only 2% of resumes make it past the
          <br /> first round. Be in the top 2%
        </Typography>
        <Typography style={{ fontSize: 22, marginBottom: 32, paddingTop: 20 }}>
          Use professional field-tested resume templates that follow the exact
          <br /> ‘resume rules’ employers look for. Easy to use & done within
          minutes -<br /> try now for free!
        </Typography>
        <Link to="/SignUp" style={{ color: "white", textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ height: "50px" }}
          >
            Create My Resume
          </Button>
        </Link>
      </div>
      <Paper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 40,
            paddingBottom: 40
          }}
        >
          <Typography variant="h4" style={{ color: "grey", paddingLeft: 20 }}>
            GoMyCode
          </Typography>
          <Typography variant="h4" style={{ color: "grey", paddingLeft: 20 }}>
            Ford
          </Typography>
          <Typography variant="h4" style={{ color: "grey", paddingLeft: 20 }}>
            Talan
          </Typography>
          <Typography variant="h4" style={{ color: "grey", paddingLeft: 20 }}>
            Peugeot
          </Typography>
        </div>
      </Paper>

      <div>
        <Typography
          style={{
            paddingTop: 60,
            paddingBottom: 30,
            fontSize: 32,
            fontWeight: 600,
            textAlign: "center"
          }}
        >
          These people got hired using
          <br /> our resume builder
        </Typography>
      </div>
      <Grid
        style={{ display: "flex", justifyContent: "center", paddingBottom: 50 }}
      >
        <Paper style={{ marginRight: 20 }}>
          <div
            style={{
              display: "flex",
              paddingTop: 31,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            <Avatar alt="Remy Sharp" src={bilel} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ paddingLeft: 10, fontSize: 18 }}>
                Bilel
              </Typography>
              <Typography
                style={{ paddingLeft: 10, fontSize: 13, color: "#98a1b3" }}
              >
                FullStack Dev
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              paddingTop: 15,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            <Typography
              style={{
                paddingTop: 15,
                paddingLeft: 31,
                paddingRight: 31,
                paddingBottom: 31
              }}
            >
              "I have never had a resume. In fact, I<br /> was clueless about
              how to even build
              <br /> a resume. The easy process here
              <br /> helped me get a resume without
              <br /> hassle."
            </Typography>
          </Typography>
        </Paper>
        <Paper style={{ marginRight: 20 }}>
          <div
            style={{
              display: "flex",
              paddingTop: 31,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            <Avatar alt="Remy Sharp" src={khaled} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ paddingLeft: 5, fontSize: 18 }}>
                Khaled Abdesattar
              </Typography>
              <Typography
                style={{ paddingLeft: 10, fontSize: 13, color: "#98a1b3" }}
              >
                FullStack Dev
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              paddingTop: 15,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            "Applying for jobs takes a lot of time.
            <br /> CV Garage helps me manage my
            <br /> resume and create new ones for
            <br /> specific job applications. It has saved
            <br /> me a lot time! Thank you!"
          </Typography>
        </Paper>
        <Paper style={{ marginRight: 20 }}>
          <div
            style={{
              display: "flex",
              paddingTop: 31,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            <Avatar alt="Remy Sharp" src={mahran} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography style={{ paddingLeft: 5, fontSize: 18 }}>
                Mahran Sahbani
              </Typography>
              <Typography
                style={{ paddingLeft: 10, fontSize: 13, color: "#98a1b3" }}
              >
                FullStack Dev
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              paddingTop: 15,
              paddingLeft: 31,
              paddingRight: 31,
              paddingBottom: 31
            }}
          >
            "I wrote my first resume about 4 years
            <br /> ago, I got hired right away. Changing
            <br /> careers meant a new updated resume.
            <br /> The sales resume helped me land my
            <br /> new job."
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

Body.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Body);
