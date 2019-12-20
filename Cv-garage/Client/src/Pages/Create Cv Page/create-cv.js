import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {createCv} from "../../actions/cv";
import Alert from "../../Layout/Alert/alert";

const CreateCv = ({createCv, history}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    driversLicense: false,
    dateOfBirth: '',
    languageSkills: '',
    Hobbies:'',
    devLanguages:'',
    devTechnologies:''
  });

  const {
    firstname,
    lastname,
    email,
    phone,
    address,
    bio,
    driversLicense,
    dateOfBirth,
    languageSkills,
    Hobbies,
    devLanguages,
    devTechnologies
  } = formData;

const onChange = e => setFormData({...formData, [e.target.name] : e.target.value})

const onSubmit = e =>{
    e.preventDefault();
    createCv(formData, history)
}

  return <Fragment>
      <h1 class="large text-primary">
        Create Your Resume
      </h1>
      <p class="lead">
        <i class="fa fa-user"></i> Let's get some information to make your
        Curriculum Vitae stand out
      </p> 
      <small>* = required field</small>

    <Alert/>

      <form class="form" onSubmit={e=>onSubmit(e)}>
        <div class="form-group">
          <input type="text" placeholder="First name" name="firstname" value={firstname} onChange={e => onChange(e)} />
          <small class="form-text"> Your first name goes here* </small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Last name" name="lastname" value={lastname} onChange={e => onChange(e)} />
          <small class="form-text"> your last name goes here* </small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Professional email address" name="email" value={email} onChange={e => onChange(e)} />
          <small class="form-text"> your professional email address* </small>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Phone number" name="phone" value={phone} onChange={e => onChange(e)} />
          <small class="form-text">  your professional phone number here* </small>
        </div>

        <div class="form-group">
          <input type="date" placeholder="Date of Birth" name="dateOfBirth" value={dateOfBirth} onChange={e => onChange(e)} />
          <small class="form-text">  your date of birth* </small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="The languages you master" name="languageSkills" value={languageSkills} onChange={e => onChange(e)} />
          <small class="form-text">  Please use comma separated values(eg. English: good, German: basic)* </small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="Your different hobbies" name="Hobbies" value={Hobbies} onChange={e => onChange(e)} />
          <small class="form-text">  Please use comma separated values(eg. Swimming, Tennis, Reading)* </small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="Your dev languages" name="devLanguages" value={devLanguages} onChange={e => onChange(e)} />
          <small class="form-text">  Please use comma separated values (eg. HTML,CSS,JavaScript,PHP) </small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="The dev technologies you master" name="devTechnologies" value={devTechnologies} onChange={e => onChange(e)} />
          <small class="form-text">  Please use comma separated values (eg. ReactJs,Angular,Symphony,NodeJs) </small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="Home address" name="address" value={address} onChange={e => onChange(e)} />
          <small class="form-text"> home address, city and country suggested* </small>
        </div>

        <div class="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)}/>
          <small class="form-text">Tell us a little about yourself</small>
        </div>


        <input type="submit" class="btn btn-primary my-1" />
        <Link to="/dashboard"><a class="btn btn-light my-1" href="#">Go Back</a> </Link>
      </form>


  </Fragment>;
};

CreateCv.propTypes = {
    createCv: PropTypes.func.isRequired,
};


export default connect(null, {createCv})(withRouter(CreateCv));
