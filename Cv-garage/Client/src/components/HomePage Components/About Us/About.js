import React from "react";
import { Grid, Paper,Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';


const About = () => {
  return (
    <Grid>
      <Paper>
          
        <Typography>Bilel whayed</Typography>
        <a href="https://www.facebook.com/profile.php?id=100004366066850"><FacebookIcon style={{color:'#4267B2'}}/></a>
        <Typography>Khaled Abdessattar</Typography>
        <a href="https://www.facebook.com/keviinfrost"><FacebookIcon style={{color:'#4267B2'}}/></a>
        <Typography>Mahran Sahbani</Typography>
        <a href="https://www.facebook.com/mahran.sahbani.1"><FacebookIcon style={{color:'#4267B2'}}/></a>
        <Typography>Ibrahim khelifi</Typography>
        <a href="https://www.facebook.com/ibrahim.khelifi"><FacebookIcon style={{color:'#4267B2'}}/></a>
      </Paper>
    </Grid>
  );
};
export default About;
