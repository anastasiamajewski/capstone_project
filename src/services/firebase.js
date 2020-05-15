import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDHdRVuBiGgYRmL5fIz-FmMK0f-p0tIS7c',
  authDomain: 'rateyourday-5f7ff.firebaseapp.com',
  databaseURL: 'https://rateyourday-5f7ff.firebaseio.com',
  projectId: 'rateyourday-5f7ff',
  storageBucket: 'rateyourday-5f7ff.appspot.com',
  messagingSenderId: '995897158479',
  appId: '1:995897158479:web:9610face99257e4861f33a',
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const authentication = firebase.auth()
const storage = firebase.storage()

export { db, authentication, storage }
