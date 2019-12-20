import React from "react";
import { Link } from "react-router-dom";

export default function Choosecv() {
  return (

    <div >
        <h1 className="chooseyourdestiny"> Choose your Resume ! </h1>
        <div className="resumetypecontainer">
        <div className="cardResume">
          <img
            src="https://resumegenius.com/wp-content/uploads/2018/12/Classic-Resume-Template-BW.png"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Classic, traditional resume. Elegant and
              easy on the eyes. Check out our Classic resume and
              find a composition that works for you.
            </p>
            <Link to="/cv1">
              <button class="btn btn-primary">Choose Resume</button>{" "}
            </Link>
          </div>
        </div>
        <div className="cardResume">
          <img
            src="https://images.resumgo.com/2018/10/VASILIS-Free-Resume-Template.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Sky blue resume: You need a compelling, one-of-a-kind resume that
              gets you noticed and gets you hired. This one is for you.
            </p>
            <Link to="/cvunavailable">
              <button class="btn btn-primary">Choose Resume</button>{" "}
            </Link>          </div>
        </div>
    </div>
    </div>
  );
}
