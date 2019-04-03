import React from 'react';
import moment from 'moment';
const ProjectSummary = (props) => {
   const project = props.project
   if (project) {
      return (
         <div className="card">
            <div className="card-content">
               <span className='card-title'>{project.title}</span>
               <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
               <p className='grey-text'>{moment(project.createAt.toDate()).toString()}</p>
            </div>
         </div>
      )
   } else {
      return (
         <div className="container center">
            <p>Loading Project list</p>
         </div>
      )
   }

}

export default ProjectSummary;