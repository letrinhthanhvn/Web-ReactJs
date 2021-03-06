import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
   authReducer,
   projectReducer,
   firestoreReducer,
   firebaseReducer
})

export default rootReducer;