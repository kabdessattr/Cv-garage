import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProject } from "../../actions/cv";
import { Link, withRouter } from "react-router-dom";

const AddProject = ({ addProject, history }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    details: "",
    description: "",
    projectDate: ""
  });

  const { projectName, details, description, projectDate } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  return (
    <Fragment>
      <h1 className="large text-primary">Add A Project you have achieved</h1>
      <p className="lead">
        <i className="fa fa-code-branch"></i> Add any Dev projects that you have
        completed in the past
      </p>
      <small> * = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addProject(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Project Name"
            onChange={e => onChange(e)}
            value={projectName}
            name="projectName"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Your specific task in the project"
            value={details}
            onChange={e => onChange(e)}
            name="details"
            required
          />
        </div>
        <div className="form-group">
          <h4>Project Date</h4>
          <input
            type="date"
            value={projectDate}
            name="projectDate"
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={description}
            onChange={e => onChange(e)}
            cols="30"
            rows="5"
            placeholder="Describe your project.."
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

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(withRouter(AddProject));
