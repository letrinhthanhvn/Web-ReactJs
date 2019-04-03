export const createProject = (data) => {
   console.log('createProject Actions', data)
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      console.log('dispatch, getState, { getFirebase, getFirestore } :::::::', dispatch, getState, getFirebase, getFirestore)
      const firestore = getFirestore();
      let profile = getState().firebaseReducer.profile;
      let userId = getState().firebaseReducer.auth.uid
      firestore.collection('projects').add({
         ...data,
         authorId: userId,
         createAt: new Date(),
         authorLastName: profile.lastName,
         authorFirstName: profile.firstName
      }).then(() =>
         dispatch({ type: 'CREATE_PROJECT', payload: data })
      ).catch(e =>
         dispatch({ type: 'CREATE_PROJECT_FAILED', payload: e })
      )
   }
}