import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/cv";
import { Link, withRouter } from "react-router-dom";

const AddEducation = ({addEducation, history}) => {
  const [formData, setFormData] = useState({
    universityName: "",
    degreeType: "",
    description: "",
    academicDateFrom: "",
    academicDateTo: "",
    current: false
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    universityName,
    degreeType,
    description,
    academicDateFrom,
    academicDateTo,
    current
  } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Academic Experience</h1>
      <p className="lead">
        <i className="fa fa-code-branch"></i> Add any schools that you have attended in
        the past
      </p>
      <small> * = required field</small>
      <form className="form" onSubmit={e=> {e.preventDefault(); addEducation(formData, history);}}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* University Name"
            onChange={e => onChange(e)}
            value={universityName}
            name="universityName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree type"
            value={degreeType}
            onChange={e => onChange(e)}
            name="degreeType"
            required
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            value={academicDateFrom}
            name="academicDateFrom"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              value={current}
              checked={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              name="current"
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            value={academicDateTo}
            disabled={toDateDisabled ? "disabled" : ""}
            onChange={e => onChange(e)}
            name="academicDateTo"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={description}
            onChange={e => onChange(e)}
            cols="30"
            rows="5"
            placeholder="Degree Description and courses you assisted in.."
          ></textarea>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
