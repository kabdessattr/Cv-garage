import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                 <section className="resume-experience">
    <h2>
      Experience
    </h2>
    <hr />
    <div>
    <ul>
        <div className="experiencediv">
        {this.props.experience!==""?this.props.experience.map(el=><li className="whatever-education">
              <div className="education-subcomponent">
                <h3> {el.companyWhere} </h3>
                <em> {el.experienceName} </em>{" "}
                <span> {el.experienceTask} </span>
                <p> {el.experienceSummary} </p>
              </div>
              <h3>
                {el.experienceDateFrom} - {el.current!==true?el.experienceDateTo:"Present"}
              </h3>
            </li>):""}

        </div>
        <br/>
    </ul>
    </div>
  </section>
            </div>
        )
    }
}
