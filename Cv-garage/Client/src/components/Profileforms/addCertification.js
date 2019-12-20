import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCertification } from "../../actions/cv";
import { Link, withRouter } from "react-router-dom";

const AddCertification = ({ addCertification, history }) => {
  const [formData, setFormData] = useState({
    certificationIssuer: "",
    certificationDate: ""
  });

  const { certificationIssuer, certificationDate } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <Fragment>
      <h1 className="large text-primary">
        Add A Certification you have acquired
      </h1>
      <p className="lead">
        <i className="fa fa-code-branch"></i> Add any Dev Certifications that
        you have completed in the past
      </p>
      <small> * = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addCertification(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Certification Name"
            onChange={e => onChange(e)}
            value={certificationIssuer}
            name="certificationIssuer"
            required
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            value={certificationDate}
            name="certificationDate"
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard">
          <a className="btn btn-light my-1" href="#">
            Go Back
          </a>{" "}
        </Link>
      </form>
    </Fragment>
  );
};

AddCertification.propTypes = {
  addCertification: PropTypes.func.isRequired
};

export default connect(null, { addCertification })(
  withRouter(AddCertification)
);
