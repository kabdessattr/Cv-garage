import React, { Component } from "react";
import Header from "../../Layout/Header/";
import Body from "../../components/HomePage Components/Body/Body";
import Footer from "../../Layout/Footer";
// import "./index.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage-css">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
