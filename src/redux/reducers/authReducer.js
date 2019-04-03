/**
* Created by thanhlt on Mon Apr 01 2019
* Copyright (c) 2019 github.com/letrinhthanhvn
*/

const initialState = {
   authError: null
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {

      case "LOGIN_SUCCESS": {
         console.log('LOGIN_SUCCESS')
         return {
            ...state
         }
      }

      case "LOGIN_FAILED": {
         console.log('LOGIN_FAILED')
         return {
            ...state
         }
      }

      case "SIGNOUT_SUCCESS": {
         console.log('SIGNOUT_SUCCESS')
         return {
            ...state
         }
      }

      case "SIGNUP_FAILED": {
         console.log('SIGNUP_FAILED', action.e.message)
         return {
            ...state,
            authError: action.e.message
         }
      }

      case "SIGNUP_SUCCESS": {
         console.log('SIGNUP_SUCCESS')
         return {
            ...state,
            authError: null
         }
      }

      default:
         return {
            ...state
         }
   }
}

export default authReducer;

