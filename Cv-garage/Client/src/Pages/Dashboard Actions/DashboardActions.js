import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

export default function DashboardActions() {
  return (
    <div className="dash-buttons">
      <Link to="/edit-cv">
        {" "}
        <button className="btn btn-light">
          {" "}
          <i className="fa fa-user-circle text-primary"></i> Edit Profile{" "}
        </button>
      </Link>
      <Link to="/add-experience">
        <button className="btn btn-light ">
          {" "}
          <i className="fas fa-code text-primary"></i> Add Experience{" "}
        </button>
      </Link>
      <Link to="/add-education">
        <button className="btn btn-light">
          {" "}
          <i className="fa fa-graduation-cap text-primary"></i> Add Education{" "}
        </button>
      </Link>
      <Link to="/add-project">
        <button className="btn btn-light">
          {" "}
          <i className="fa fa-tasks"></i> Add Project{" "}
        </button>
      </Link>
      <Link to="/add-certification">
      <button className="btn btn-light">
          {" "}
          <i className="fas fa-project-diagram text-primary"></i> Add Certification{" "}
        </button>
      </Link>
    </div>
  );
}
