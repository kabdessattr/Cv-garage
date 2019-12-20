import React, { Component } from "react";

export default class AdditionalInformation extends Component {
  render() {
    return (
      <div>
        <section className="resume-certification">
          <h2> Additional Information </h2>
          <hr />
          <div className="">
            <div className="AdditionalInfoStuff">
              {" "}
              <h3> Driver's License:</h3>{" "}
              <p className="AdditionalPara"> Yes </p>
            </div>
            <div className="AdditionalInfoStuff">
              {" "}
              <h3> Date of Birth: </h3>{" "}
              <p className="AdditionalPara"> {this.props.dateOfBirth} </p>{" "}
            </div>
            <div className="AdditionalInfoStuff">
              {" "}
              <h3> Language Skills: </h3>{" "}
              
              {this.props.languageSkills!==""?this.props.languageSkills.map(el=> <p className="AdditionalPara"> {el}  </p> ):""}
            </div>
            <div className="AdditionalInfoStuff">
              <h3> Hobbies: </h3>
              {this.props.Hobbies!==""?this.props.Hobbies.map(el=><p className="AdditionalPara"> {el} </p>):""}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
