import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import {deleteEducation} from "../../actions/cv"

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td> {edu.universityName}</td>
      <td className="hide-sm"> {edu.degreeType}</td>
      <td>
      {edu.academicDateFrom} - {" "}
        {/* <Moment format="YYYY/MM/DD"> {exp.experienceDateFrom} </Moment> -{" "} */}
        {edu.academicDateTo === "" ? (
          "Present"
        ) : (
          
          edu.academicDateTo 
        )}
      </td>
      <td>
        <button className="btn btn-danger" onClick={()=>deleteEducation(edu._id)}> Delete </button>
      </td>
    </tr>
  ));

  return (
    <Fragment> 
      <h2 className="my-2"> Academic Experiences </h2>
      <table className="table">
        <thead>
          <tr>
            <th> University/Institution </th>
            <th className="hide-sm"> Degree Type </th>
            <th className="hide-sm"> Years </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, {deleteEducation}) (Education);
