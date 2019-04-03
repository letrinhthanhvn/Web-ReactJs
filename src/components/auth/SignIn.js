import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';
class SignIn extends Component {

   state = {
      email: '',
      password: '',
      // firstname: '',
      // lastname: ''
   }

   _onChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   _onSubmit = (e) => {
      e.preventDefault()
      this.props.signIn(this.state)
   }

   render() {
      const { auth } = this.props
      if (auth.uid) return <Redirect to='/' />
      return (
         <div className="container">
            <form onSubmit={this._onSubmit} className="white">
               <h5 className="gray-text">
                  Sign In
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
               {/* <div className="input-field">
                  <label htmlFor='firstName'>
                     Fisrt name
                  </label>
                  <input type='text' id='firstname' onChange={this._onChange} />
               </div>
               <div className="input-field">
                  <label htmlFor='lastName'>
                     Last name
                  </label>
                  <input type='text' id='lastname' onChange={this._onChange} />
               </div> */}
               <div className="input-field">
                  <button className="waves-effect waves-light btn">Login</button>
               </div>
            </form>
         </div>
      )
   }
}

const mapDispatchToProps = {
   signIn
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebaseReducer.auth
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);