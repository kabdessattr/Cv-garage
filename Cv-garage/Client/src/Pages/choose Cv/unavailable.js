import React from "react";
import { Link } from "react-router-dom";

export default function Unavailable() {
  return (

    <div >
      
      <center>

        <h2> We apologize, the requested page is still in development. Thank you. </h2>
<Link to="/dashboard">
      <button type="button" className="btn btn-danger">Go Back to Dashboard</button>
      </Link> </center>

    </div>
  );
}
