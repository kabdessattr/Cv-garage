import React, { Component } from "react";
import Cv from "../../Pages/CV page/index";
import ReactToPrint from "react-to-print";

export default class Print1 extends Component {


  render() {
    return (
      <div>
        <p>Click above button opens print preview with these words on page</p>
        <button className="btn btn-primary" onClick={this.triggerChildAlert()}>
          {" "}
          Print{" "}
        </button>

        <Cv ref="child" />
      </div>
    );
  }
}
