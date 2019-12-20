import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="resume-header">
    <h1> {this.props.firstName} {this.props.lastName}</h1>
          <ul>
            <li>
              <a> {this.props.email} </a>

              <img
                src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Mail_black-512.png"
                className="image-icon"
                alt="Mail Icon"
              />
            </li>
            <li>
              <a> {this.props.number}
              <img
                src="https://cdn4.iconfinder.com/data/icons/messenger-1-0-line/106/Phone_Line-512.png"
                className="image-icon"
                alt="Phone Icon"
              /> </a>
            </li>
            <li>
              <a> {this.props.github}
                <img
                  src="https://library.kissclipart.com/20190901/kxq/kissclipart-github-icon-e65235bc5e00fb81.png"
                  alt="Github Icon"
                  className="image-icon"
                />
              </a>
            </li>

            

            
          </ul>
          <ul>
            <li> {this.props.address}</li>
          </ul>
        </header>
        <br/>
      </div>
    );
  }
}
