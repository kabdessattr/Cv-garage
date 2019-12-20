import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const ProfileInfo = ({ cv:{Cv} }) => {

  return (
    <Fragment>
      <h2 className="my-2"> Profile Information </h2>
      <table className="table">
        <thead>
          <tr>
            <th> Name </th>
            <th className="hide-sm"> Email  </th>
            <th className="hide-sm"> Phone </th>
            <th> Date of Birth </th>
            <th> Dev Languages </th>
            <th> Dev Technologies </th>
          </tr>
        </thead>
        <tbody><td> {Cv.firstname} {Cv.lastname}</td>
      <td className="hide-sm"> {Cv.email}</td>
  <td> {Cv.phone}</td>
      <td> {Cv.dateOfBirth}     </td>
      <td> {Cv.devLanguages.map(el=>(<div> <ul> <li> {el}</li></ul></div>))}     </td>
      <td> {Cv.devTechnologies.map(el=>(<div> <ul> <li> {el}</li></ul></div>))}     </td>
</tbody>
      </table>
    </Fragment>
  );
};

ProfileInfo.propTypes = {
    cv: PropTypes.object.isRequired};

const mapStateToProps = state => ({
    cv: state.cv
  });

export default connect(mapStateToProps) (ProfileInfo);
