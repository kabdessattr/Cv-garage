import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import {deleteProject} from "../../actions/cv";


const Project = ({ project, deleteProject }) => {
  const projects = project.map(proj => (
    <tr key={proj._id}>
      <td> {proj.projectName}</td>
      <td className="hide-sm">{proj.details}</td>
      <td> {proj.projectDate}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>deleteProject(proj._id)}> Delete </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2"> Projects Done </h2>
      <table className="table">
        <thead>
          <tr>
            <th> Project Name </th>
            <th className="hide-sm"> Project Details </th>
            <th className="hide-sm"> Project Date </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.array.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, {deleteProject}) (Project);
