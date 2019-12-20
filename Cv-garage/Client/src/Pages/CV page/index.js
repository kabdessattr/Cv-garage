import React, { Component } from "react";
import Header from "../../components/Cv components/header";
import Education from "../../components/Cv components/education";
import TechnicalSkills from "../../components/Cv components/technical skills";
import Projects from "../../components/Cv components/projects";
import Experience from "../../components/Cv components/experience";
import Certifications from "../../components/Cv components/certifications";
import "../CV page/index.css";
import AdditionalInformation from "../../components/Cv components/AdditionalInformation";
import { connect } from "react-redux";
import { getCurrentCv } from "../../actions/cv";
import Printer, { print } from "react-pdf-print";
import {Link} from 'react-router-dom';

const ids = ["1"];

class Cv extends Component {
  componentDidMount = () => {
    this.props.getCurrentCv();
  };

  render() {
    const cv = this.props.cv.Cv;
    return (
      <div>
        <Printer>
          <div className="A4" id={ids[1]}>
            <div className="react-resume">
              <div className="resume">
                <div>
                  <Header
                    firstName={cv !== null ? cv.firstname : ""}
                    lastName={cv !== null ? cv.lastname : ""}
                    email={cv !== null ? cv.email : ""}
                    number={cv !== null ? cv.phone : ""}
                    github="someone's github"
                    address={cv !== null ? cv.address : ""}
                  />

                  <Education Education={cv !== null ? cv.academicInfo : ""} />

                  <TechnicalSkills
                    dev={cv !== null ? cv.devLanguages : ""}
                    tech={cv !== null ? cv.devTechnologies : ""}
                  />

                  <Projects projects={cv !== null ? cv.projectsWorked : ""} />

                  <Experience
                    experience={cv !== null ? cv.ProfessionalExperience : ""}
                  />

                  <Certifications
                    certification={cv !== null ? cv.Certifications : ""}
                  />

                  <AdditionalInformation
                    driversLicense={cv !== null ? cv.driversLicense : ""}
                    dateOfBirth={cv !== null ? cv.dateOfBirth : ""}
                    languageSkills={cv !== null ? cv.languageSkills : ""}
                    Hobbies={cv !== null ? cv.Hobbies : ""}
                  />
                </div>
              </div>
            </div>
          </div>
        </Printer>
        <center>
        <input
          type="button"
          className="boutonpdf btn btn-primary btn-lg"
          onClick={() => print(ids)}
          value="Download PDF"
        />
        <Link to="/dashboard"> <button className="boutondashboard btn btn-danger"> To Dashboard </button></Link>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cv: state.cv
});

export default connect(mapStateToProps, { getCurrentCv })(Cv);
