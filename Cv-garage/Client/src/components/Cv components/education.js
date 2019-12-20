import React, { Component } from "react";
import "../../App.css";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="resume-education">
          <h2 className="education-h2"> Education</h2>
          <hr />
          <ul>
            {this.props.Education!==""?this.props.Education.map(el=><li className="whatever-education">
              <div className="education-subcomponent">
                <h3> {el.universityName} </h3>
                <em> {el.degreeType} </em>{" "}
              </div>
              <h3>
                {el.academicDateFrom} - {el.current!==true?el.academicDateTo:"Present"}
              </h3>
            </li>):""}
          </ul>
        </section>
        <br />
      </div>
    );
  }
}
