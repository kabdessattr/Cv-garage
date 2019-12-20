import React, { Component } from 'react'
import "./projects.css"

export default class Projects extends Component {
    render() {
      const project=this.props.projects
        return (

            <div>
                <section className="resume-projects">
    <h2>
      Projects
    </h2>
    <hr />
    <ul>
        {project!==""?project.map(el=><div className="projectBlock">
        <li>
          <h3>
              <a href="project link">
                {el.ProjectName}
              </a>
          </h3>
          
          <em> {el.projectDescription}</em>
          <ul>
              <li>
                  <a>
                    {el.projectDetails}
                  </a>
              </li>
          </ul>
        </li> <h3>
            {el.ProjectDateFrom} to {el.ProjectDateTo}
          </h3></div>):""}
        
    </ul>
  </section>
            </div>
        )
    }
}
