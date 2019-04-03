import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';
import { Redirect } from 'react-router-dom';
class CreateProject extends Component {

   state = {
      title: '',
      content: ''
   }

   _onChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   _onSubmit = (e) => {
      e.preventDefault()
      this.props.createProject(this.state)
      this.props.history.push('/');
   }

   render() {
      const { auth } = this.props
      if (!auth.uid) return <Redirect to='/signin'/>
      return (
         <div className="container">
            <form onSubmit={this._onSubmit} className="white">
               <h4 className="grey-text">Create New Project</h4>
               <div className="input-field">
                  <label htmlFor='title'>Title</label>
                  <input type="text" id='title' className="input-field col s12" onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <label htmlFor='project-content'>Project Content</label>
                  <input type="text" id='content' className="input-field col s12" onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <button className="waves-effect waves-light btn">Create</button>
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = {
   createProject
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebaseReducer.auth
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);