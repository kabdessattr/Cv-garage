import React, { Component } from "react";

export default class TechnicalSkills extends Component {
  render() {
    return (
      <div>
        <section className="resume-education">
          <h2 className="education-h2"> Technical Skills </h2>
          <br />
          <ul>
            <li className="whatever-education">
              <div className="education-subcomponent">
                <h3>
                  {" "}
                  <strong> Development Languages :</strong>{" "}
                </h3>
                <em className="devtechnologies">
                  {" "}
                  {this.props.dev !== ""
                    ? this.props.dev.map(el => (
                        <p className="techtech"> {el} </p>
                      ))
                    : ""}{" "}
                </em>{" "}
              </div>
              <div className="education-one">
                <em className="devtechnologies">
                  {" "}
                  <strong> Technologies : </strong>{" "}
                  {this.props.tech !== ""
                    ? this.props.tech.map(el => (
                        <p className="techtech"> {el} </p>
                      ))
                    : ""}{" "}
                </em>{" "}
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
