import React, { Component, Fragment, useEffect } from "react";
import ReactToPrint from "react-to-print";
import "./cvmodern.css";
import { connect } from "react-redux";
import { getCurrentCv } from "../../actions/cv";
import PropTypes from "prop-types";
import Printer, { print } from "react-pdf-print";
import {Link} from 'react-router-dom';


const ids = ["1"];


const CvModern=({ getCurrentCv, cv:{Cv} })=> {
  useEffect(() => {
    getCurrentCv();
  }, []);

  return (
    <Fragment>
      <Printer>
    <div className="row CvModern" id={ids[0]}>
      <div className="col-3 infPersonel">
        <div className="Personnel">
          <img
            className="imgcv"
            src="https://static3.depositphotos.com/1000951/138/i/950/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg"
          />

  <h2>{Cv!==null?Cv.firstname:"firstname"}</h2>
          <h2>{Cv!==null?Cv.lastname:"Lastname"}</h2>
        </div>
        <div className="Personnel0">
          <i className="fab fa-github-square">Github</i>
          <i className="fas fa-mobile-alt">{Cv!==null?Cv.phone:"Phone"}</i>
          <i className="fas fa-at">{Cv!==null?Cv.email:"firstname"}</i>
          <i className="fas fa-map-marker-alt">{Cv!==null?Cv.address:"firstname"}</i>
        </div>
        <div className="Personnel1">
          <h3 className="Inf">Additional Information</h3>
          <i>{Cv!==null?Cv.dateOfBirth:"firstname"}</i>
          <i>Drivers License: No :(</i>
        </div>
        <div className="Personnel2">
          <h3 className="Inf">Hobbies</h3>
          {Cv!==null?Cv.Hobbies.map(el=><ul><li>{el}</li></ul>):"firstname"}
        </div>
      </div>
      <div className="col-9 infGlobal">
        <div className="Experiences">
          <i className="fas fa-laptop-code Exp"> Experiences</i>
          <div>
            
          {Cv!==null?Cv.ProfessionalExperience.map(el=><div className="Cardglobal"><div>
              <p>
                <span>{el.experienceDateFrom} To </span>
                <span>{el.experienceDateTo!=="Present"?el.experienceDateTo:"Present"}</span>
              </p>
            </div>
            <div>
              <h4>{el.experienceName}</h4>
              <h5>{el.companyWhere}</h5>
              <p>{el.experienceSummary}</p>
            </div> </div> ):"firstname"}
            
          </div>
        </div>
        <div className="Experiences">
          <i class="fas fa-graduation-cap Exp">Academic</i>
          <div>
          {Cv!==null?Cv.academicInfo.map(el=><div className="Cardglobal"><div>
              <p>
                <span>{el.academicDateFrom} To </span>
                <span>{el.academicDateTo!=="Present"?el.academicDateTo:"Present"}</span>
              </p>
            </div>
            <div>
              <h4>{el.universityName}</h4>
              <h5>{el.degreeType}</h5>
            </div> </div> ):"firstname"}        </div></div>
        <div className="Experiences">
          <i class="far fa-window-restore Exp">Skills</i>
          <div className="technicalSkills">
            <div>
              <i class="fas fa-file-code"> Devlopeur Languages :</i>
              {Cv!==null?Cv.devLanguages.map(el=><ul><li>{el}</li></ul>):"firstname"}            </div>
            <div>
              <i class="fas fa-file-code"> Devlopeur Technologies :</i>
              {Cv!==null?Cv.devTechnologies.map(el=><ul><li>{el}</li></ul>):"firstname"}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Printer>
    <center>
        <input
          type="button"
          className="boutonpdf btn btn-primary btn-lg"
          onClick={() => print(ids)}
          value="Download PDF"
        />
        <Link to="/dashboard"> <button className="boutondashboard btn btn-danger"> To Dashboard </button></Link>
        </center>
    </Fragment>
  );
}

CvModern.propTypes = {
  getCurrentCv: PropTypes.func.isRequired,
  cv: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  cv: state.cv,
  auth: PropTypes.object.isRequired,
});

export default connect(mapStateToProps, { getCurrentCv })(CvModern);
