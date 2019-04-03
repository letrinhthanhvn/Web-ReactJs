import React, { Component } from 'react';
import Notification from './Notifications';
import ProjectList from '../projects/ProjectList';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class DashBoard extends Component {
   render() {
      const { auth, notification } = this.props
      if (!auth.uid) return <Redirect to={'/signin'} />
      return (
         <div className="container">
            <div className='row'>
               <div className="col s12 m6">
                  <ProjectList project={this.props.projects} />
               </div>
               <div className="col s12 m5 offset-m1">
                  <Notification notifications={notification}/>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      projects: state.firestoreReducer.ordered.projects || [],
      auth: state.firebaseReducer.auth,
      notification: state.firestoreReducer.ordered.nofification
   }
}

// export default firestoreConnect([{ collection: "projects" }])
//    (connect(
//       mapStateToProps)(DashBoard))

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
      { collection: "projects", orderBy: ['createAt', 'desc'] },
      { collection: 'nofification', limit: 3, orderBy: ['time', 'desc'] }
   ]),
)(DashBoard);
