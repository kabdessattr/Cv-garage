import React, { Component } from "react";

export default class Certifications extends Component {
  render() {
    return (
      <div>
        <section className="resume-certification">
          <h2>Certifications</h2>
          <hr />
          <div className="certificationContainer">
            <ul className="certificationBlock">
              {this.props.certification!==""?this.props.certification.map(el => (
                <li className="one-certificate">
                  <h3>Certificate title and issuer:</h3>
                  <p> {el.certificationIssuer} </p>
                  <h3> {el.certificationDate}</h3>
                </li>
              )):""}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
