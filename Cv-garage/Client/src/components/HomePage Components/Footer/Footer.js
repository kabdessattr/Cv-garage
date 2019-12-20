import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2"   align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}- CV Garage
    </Typography>
  );
}
const FooterComp = () => {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection:'column',
        color: "#fff",
        backgroundColor: "#0f141f",
        paddingTop: 100,
        paddingBottom: 40,
        paddingLeft: 44,
        paddingRight: 44,

        
        fontSize: 18
      }}
    >
      
     <div style={{display:'flex',justifyContent: "space-between",}}>
      <Typography style={{ color: "white", fontSize: 19 }}>
        Connect with us <br />
        on social media
        <br />
        <div style={{display:'flex',paddingTop:10}}>
        <a href="https://www.facebook.com/profile.php?id=100004366066850" >
          <FacebookIcon style={{ color: "#4267B2" }} />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <LinkedInIcon style={{ color: "#4267B2" }} />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <TwitterIcon style={{ color: "#4267B2"}} />
        </a>
        </div>
      </Typography>

      <Typography
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#3d4047",
          fontSize: 14
        }}
      >
        JOB SEEKERS
        <a style={{ color: "white", letterSpacing: 2.2, lineHeight: 2 }}>
          Build a Resume
        </a>
        <a style={{ color: "white", letterSpacing: 2.2, lineHeight: 2 }}>
          Resumes Example
        </a>
      </Typography>

      <Typography
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#3d4047",
          fontSize: 14
        }}
      >
        OUR Team
        <Link
          to="/About"
          style={{
            color: "white",
            letterSpacing: 2.2,
            lineHeight: 2,
            textDecoration: "none"
          }}
        >
          About Us
        </Link>
      </Typography>
      <Typography
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#3d4047",
          fontSize: 14
        }}
      >
        SUPPORT
        <Link
          to="/ContactUs"
          style={{
            color: "white",
            letterSpacing: 2.2,
            lineHeight: 2,
            textDecoration: "none"
          }}
        >
          Contact Us
        </Link>
      </Typography>
      </div>
    
      <Box mt={8} color="#3d4047" align="center">
        <Copyright />
      </Box>
     
    </Grid>
  );
};
export default FooterComp;
