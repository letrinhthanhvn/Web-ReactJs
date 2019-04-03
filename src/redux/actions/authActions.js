export const signIn = (data) => {
   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();

      firebase.auth().signInWithEmailAndPassword(
         data.email,
         data.password
      ).then(() => {
         dispatch({ type: "LOGIN_SUCCESS" })

      }).catch(e => {
         dispatch({ type: "LOGIN_FAILED", e })
      })
   }
}

export const signOut = (data) => {
   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();

      firebase.auth().signOut(
      ).then(() => {
         dispatch({ type: "SIGNOUT_SUCCESS" })
      })
   }
}

export const signUp = (data) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore()
      console.log('data signUp', data)

      firebase.auth().createUserWithEmailAndPassword(
         data.email,
         data.password
      ).then((res) => {
         console.log('res signUp :::::::::', res)
         return firestore.collection('users').doc(res.user.uid).set({
            firstName: data.firstName,
            lastName: data.lastName,
            initials: data.firstName[0] + data.lastName[0]
         })
      }).then(() => {
         dispatch({ type: "SIGNUP_SUCCESS" })
      }).catch(e => {
         dispatch({ type: "SIGNUP_FAILED", e })
      })
   }
}

