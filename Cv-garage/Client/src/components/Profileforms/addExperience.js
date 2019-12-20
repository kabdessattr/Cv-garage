import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/cv";
import { Link, withRouter } from "react-router-dom";
import Alert from "../../Layout/Alert/alert";

const AddExperience = ({addExperience, history}) => {
  const [formData, setFormData] = useState({
    experienceName: "",
    companyWhere: "",
    experienceSummary: "",
    experienceTask: "",
    experienceDateFrom: "",
    experienceDateTo: "",
    current: false
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    experienceName,
    companyWhere,
    experienceSummary,
    experienceTask,
    experienceDateFrom,
    experienceDateTo,
    current
  } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fa fa-code-branch"></i> Add any positions that you have had in
        the past
      </p>
      <small> * = required field</small>
      <form className="form" onSubmit={e=> {e.preventDefault(); addExperience(formData, history);}}>
        
        <Alert/>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            onChange={e => onChange(e)}
            value={experienceName}
            name="experienceName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            value={companyWhere}
            onChange={e => onChange(e)}
            name="companyWhere"
            required
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            value={experienceDateFrom}
            name="experienceDateFrom"
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
            value={experienceDateTo}
            disabled={toDateDisabled ? "disabled" : ""}
            onChange={e => onChange(e)}
            name="experienceDateTo"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Main Job Task"
            value={experienceTask}
            onChange={e => onChange(e)}
            name="experienceTask"
            required
          />
          <textarea
            name="experienceSummary"
            value={experienceSummary}
            onChange={e => onChange(e)}
            cols="30"
            rows="5"
            placeholder="Job Description"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
