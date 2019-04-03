import React from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const ProjectList = (props) => {
   return (
      <div className="project-list section">
         {
            props.project.map(e => {
               return (
                  <Link to={'/project/' + e.id} key={e.id}>
                     <ProjectSummary key={e.id} project={e} />
                  </Link>
               )
            })
         }
      </div>
   )
}
export default ProjectList;