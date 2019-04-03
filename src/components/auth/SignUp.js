import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../redux/actions/authActions';
class SignUp extends Component {

   state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
   }

   _onChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   _onSubmit = (e) => {
      e.preventDefault()
      this.props.signUp(this.state)
   }

   render() {
      const { auth, authError } = this.props
      if (auth.uid) return <Redirect to='/' />
      return (
         <div className="container">
            <form onSubmit={this._onSubmit} className="white">
               <h5 className="gray-text">
                  Sign Up
               </h5>
               <div className="input-field">
                  <label htmlFor='email'>
                     Email
                  </label>
                  <input type='email' id='email' onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <label htmlFor='password'>
                     Password
                  </label>
                  <input type='password' id='password' onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <label htmlFor='firstName'>
                     Fisrt name
                  </label>
                  <input type='text' id='firstName' onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <label htmlFor='lastName'>
                     Last name
                  </label>
                  <input type='text' id='lastName' onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <button className="waves-effect waves-light btn">Sign Up</button>
                  <div className="red-text center">
                     {authError ? <p>{authError}</p> : null}
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = {
   signUp
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebaseReducer.auth,
      authError: state.authReducer.authError
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);