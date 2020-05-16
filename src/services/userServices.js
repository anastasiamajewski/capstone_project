import * as firebase from './firebase'
import { authentication } from './firebase'

function getUser({ db = firebase.db, id }) {
  try {
    return db
      .collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) return new Error('User not found in db!')
        return doc.data()
      })
      .catch((error) => {
        console.error('Error getting user: ', error)
        return error
      })
  } catch (error) {
    console.error('Error getting user: ', error)
    return error
  }
}

async function signUp({
  db = firebase.db,
  email,
  password,
  firstName,
  lastName,
}) {
  return await authentication
    .createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
      await addUser({
        db,
        user: res.user,
        firstName,
        lastName,
      })
    })
    .catch((error) => {
      console.error('Error creating new user: ', error)
      return error
    })
}

async function addUser({ db = firebase.db, user, firstName, lastName }) {
  return await db
    .collection('users')
    .doc(user.uid)
    .set({
      _id: user.uid,
      firstName: firstName,
      lastName: lastName,
      email: user.email,
      registered: new Date().getTime(),
      emailVerified: user.emailVerified,
    })
    .then(() => {
      // console.log('User successfully stored in DB.')
    })
    .catch((error) => console.error('Error writing document: ', error))
}

async function logIn({ email, password }) {
  return await authentication
    .signInWithEmailAndPassword(email, password)
    .then((res) => res)
    .catch((error) => error)
}

export { signUp, logIn, addUser, getUser }
