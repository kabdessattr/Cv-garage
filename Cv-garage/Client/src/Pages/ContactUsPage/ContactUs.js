import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import { Grid, Paper,Typography,Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
const ContactUs=()=>{
    return(
        <Grid style={{display:'flex',flexDirection:'column',backgroundColor:'#F2F5FA'}}>
            <div align='center'>
            <Typography variant="h2" style={{paddingTop:80,color:'#2196f3',fontSize: 54,marginBottom:8,fontWeight:70,paddingTop:100}}>Contact Us</Typography>
            <Typography style={{marginBottom: 40,fontFamily:'sans-serif',color:"black",fontSize: 22}}>Have comments, questions, or feedback to share? Our team would love to hear from<br/>
             you. Give us a call or submit a message below.</Typography>
             </div>
            <Paper style={{marginLeft:80,marginRight:80,marginBottom:40,paddingTop:48,paddingBottom:48,paddingLeft:80,paddingRight:80}}>
               <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{marginTop:40}}>
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Name"
            label="Name"
            name="Name"
            autoComplete="Name"
            autoFocus
          />
         </div>
         <div style={{marginTop:56}}>
        <TextField
          id="Message"
          label="Message*"
          multiline
          rows="5"
          defaultValue="Message*"
          variant="outlined"
          style={{height:135,width:239}}
        />
            </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',paddingTop:15,fontSize: 18,height: 47}}>
            <Button variant="contained" color="primary" >Send Message</Button>
            </div>
            </Paper>
            <div style={{display:'flex',marginLeft:'21%'}}>
            <Typography style={{fontSize:14,letterSpacing:1.8,color:'#7a8599',width: 160,marginRight: 32}}>ADRESSE</Typography>
            <Typography> Immeuble NEO, 2ème étage,<br/> Rue du lac lochness,<br/> Les Berges du Lac1, Tunis 1053, Tunisie</Typography>
            </div>
            <div style={{display:'flex',marginLeft:'21%',marginBottom:'5%',paddingTop:10}}>
              <Typography style={{fontSize:14,letterSpacing:1.8,color:'#7a8599',width: 160,marginRight: 32}}>PHONE</Typography>
              <Typography>Call us for questions about billing, cancellations, or<br/> support — (TUN)<span style={{color:'#168ae6'}}> +216 24465789</span>  </Typography>
            </div>
        </Grid>
    )
}
export default ContactUs