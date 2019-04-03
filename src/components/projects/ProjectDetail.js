import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetail = (props) => {
   let { project, auth } = props;
   if (!auth.uid) return <Redirect to='/signin'/>
   if (project) {
      return (
         <div className="container">
            <div className="card">
               <div className="card-content">
                  <span className="card-title">
                     Project + {project.title}
                  </span>
                  <p>{project.content}</p>
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div className="container center">
            <p>Loading project ...</p>
         </div>
      )
   }

}

const mapStateToProps = (state, props) => {
   let id = props.match.params.id;
   let projects = state.firestoreReducer.data.projects
   let project = !!projects ? projects[id] : null
   return {
      project,
      auth: state.firebaseReducer.auth
   }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
      { collection: "projects" }
   ]),
)(ProjectDetail);