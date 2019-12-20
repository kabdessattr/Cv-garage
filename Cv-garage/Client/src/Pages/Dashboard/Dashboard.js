import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentCv } from "../../actions/cv";
// import "./dashboard.css"
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/index";
import Alert from "../../Layout/Alert/alert";
import DashboardActions from "../Dashboard Actions/DashboardActions";
import Experience from "../../components/dashboard components/Experience";
import Education from "../../components/dashboard components/Education";
import ProfileInfo from "../../components/dashboard components/profile";
import Project from "../../components/dashboard components/Projects";
import { deleteAccount } from "../../actions/cv";


// setTimeout(function(){ window.location.reload([1]);}, 2000);


const Dashboard = ({
  getCurrentCv,
  deleteAccount,
  auth: { user },
  cv: { Cv }
}) => {
  useEffect(() => {
    getCurrentCv();
  }, []);


  return (
    <Fragment>
      <Header />
      <br />
      <br />
      <br />

      <h1 className="large text-primary"> Dashboard </h1>
      <p className="lead">
        {" "}
        <i className="fa fa-user"></i> Welcome {user && user.name}{" "}
      </p>
      <Alert />

      {Cv !== null ? (
        <Fragment>
          <DashboardActions />
          <br />
          <ProfileInfo />
          <br />
          <Experience experience={Cv.ProfessionalExperience} />
          <br />
          <Education education={Cv.academicInfo} />
          <br />
          <Project project={Cv.projectsWorked} />
          <br />
          <Link to="/choosecv">
            <button className="btn btn-primary">
              {" "}
              <i className="far fa-file"></i> Print my resume{" "}
            </button>{" "}
          </Link>
          <button className="btn btn-danger" onClick={() => deleteAccount()}>
            {" "}
            <i className="fa fa-user-minus"></i> Delete My Account{" "}
          </button>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <h5> If you have information and it does not show up, please refresh the page.</h5>
          <p>
            {" "}
            You do not have any Resumes available. Time to create your first
            Resume!{" "}
          </p>{" "}
          <Link to="/createcv" className="btn btn-primary my-1">
            {" "}
            Get Started{" "}
          </Link>{" "}
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentCv: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  cv: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cv: state.cv
});

export default connect(mapStateToProps, { getCurrentCv, deleteAccount })(
  Dashboard
);
