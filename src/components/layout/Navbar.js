import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
class Navbar extends Component {
   render() {
      const { profile, auth } = this.props
      let link = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
      return (
         <nav className="nav-wrapper green">
            <div className="container">
               <Link to='/' className='brand-logo'>Training Web</Link>
               {
                  link
               }
            </div>
         </nav>
      )
   }
}

const mapStateToProps = (state) => {
   console.log('state', state)
   return {
      auth: state.firebaseReducer.auth,
      profile: state.firebaseReducer.profile
   }
}
export default connect(mapStateToProps)(Navbar);