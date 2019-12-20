import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import SignIn from "../../Pages/SignIn Page/SignIn";
import SignUp from "../../Pages/SignUp Page/SignUp";
import StepperPage from "../../Pages/Stepper Page/index";
import Cv from "../../Pages/CV page/index";
// import "./index.css";
import ContactUs from "../../Pages/ContactUsPage/ContactUs";
import AboutUs from "../../Pages/About us/aboutus";
import PrivateRoute from "../routing/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import CreateCv from "../../Pages/Create Cv Page/create-cv";
import EditCv from "../../components/Profileforms/editCv";
import addExperience from "../../components/Profileforms/addExperience";
import addEducation from "../../components/Profileforms/addEducation";
import addProject from "../../components/Profileforms/addProject";
import addCertification from "../../components/Profileforms/addCertification";
import CvModern from "../../components/Cv modern/cvmodern";
import Choosecv from "../../Pages/choose Cv/choosecv";
import Print1 from "../../components/printing/print";
import Unavailable from "../../Pages/choose Cv/unavailable";

export default function Main() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        {/* <Route path="/Stepper" component={StepperPage} /> */}
        <PrivateRoute path="/cv1"> <Cv/> </PrivateRoute>
        <PrivateRoute path="/choosecv" component={Choosecv} />
        <PrivateRoute path="/cvunavailable" component={Unavailable} />
        <PrivateRoute path="/cv2" component={CvModern} /> 
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/createcv" component={CreateCv} />
        <PrivateRoute path="/edit-cv" component={EditCv} />
        <PrivateRoute path="/add-experience" component={addExperience} />
        <PrivateRoute path="/add-education" component={addEducation} />
        <PrivateRoute path="/add-project" component={addProject} />
        <PrivateRoute path="/add-certification" component={addCertification} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </section>
  );
}
