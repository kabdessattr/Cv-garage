import React from "react";
import { Grid, Typography } from "@material-ui/core";
import about from "../../about.jpg";
import local from "../../local.jpg";

const AboutUs = () => {
  return (
    <Grid
      style={{
        marginTop: 60,
        fontFamily: "Helvetica, Arial, sans-serif",
        marginLeft: "10%",
        marginRight: "20%",
        marginBottom: 20
      }}
    >
      <Typography
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 30,
          fontSize: 25,
          paddingTop: 50
        }}
      >
        <span style={{ fontSize: 12, color: "grey" }}>ABOUT US</span>
        <br /> “Our mission is to help job seekers
        <br /> <strong style={{ color: "#2196f3" }}>grow careers</strong>. We
        love helping people
        <br /> stand out in their job search and get
        <br /> hired faster.”
      </Typography>
      <div style={{ display: "flex" }}>
        <img src={about} alt="about" style={{ width: "60%" }} />
        <img src={local} alt="local" style={{ width: "60%" }} />
      </div>
      <div
        style={{
          paddingTop: 20,
          marginLeft: 100,
          marginRight: 100,
          paddingBottom: 20
        }}
      >
        <Typography variant="h4">Few details</Typography>
        <Typography style={{ paddingTop: 10 }}>
          At CV Garage, we believe that building a job-worthy resume should
          <br /> be a fast and simple process. In fact, we’ve always been about
          <br /> building systems that are quick and easy-to-use, yet
          consistently
          <br /> get good results.
        </Typography>
      </div>
    </Grid>
  );
};
export default AboutUs;
