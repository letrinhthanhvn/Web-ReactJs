import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';
const SignedInLinks = (props) => {
   console.log('SignedInLinks', props)
   return (
      <ul className='right'>
         <li><NavLink to='/create'>New Project</NavLink></li>
         <li><a onClick={() => props.signOut()}>Log Out</a></li>
         <li><NavLink to='/' className='btn-floating btn-large waves-effect waves-light red'>{props.profile.initials}</NavLink></li>
      </ul>
   )
}

const mapDispatchToProps = {
   signOut
}

const mapStateToProps = (state) => {
   return {
      profile: state.firebaseReducer.profile
   }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);