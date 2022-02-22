import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYZQAJVVOaVein_vt6WNRnEe0SlsbWed4",
  authDomain: "crwn-db-43aa8.firebaseapp.com",
  projectId: "crwn-db-43aa8",
  storageBucket: "crwn-db-43aa8.appspot.com",
  messagingSenderId: "772462897360",
  appId: "1:772462897360:web:5495bbc5096b571aee16d5",
  measurementId: "G-SXKBYK9ZJZ"
};


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  console.log(snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message)
    }

  }
  return userRef
}
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;    