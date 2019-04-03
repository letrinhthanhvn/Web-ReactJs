import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

var config = {
   apiKey: "AIzaSyAwBfqiaaPbE-EUHxrSjVmj703767849l0",
   authDomain: "training-web-react.firebaseapp.com",
   databaseURL: "https://training-web-react.firebaseio.com",
   projectId: "training-web-react",
   storageBucket: "training-web-react.appspot.com",
   messagingSenderId: "507232080973"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.firestore().settings({})
export default firebase;