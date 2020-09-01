import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAA1p6ta3OtQ1WjAj0Mn8zy4DJIM1SAt7o',
  authDomain: 'recopilaciones-bdff6.firebaseapp.com',
  databaseURL: 'https://recopilaciones-bdff6.firebaseio.com',
  projectId: 'recopilaciones-bdff6',
  storageBucket: 'recopilaciones-bdff6.appspot.com',
  messagingSenderId: '45450903208',
  appId: '1:45450903208:web:877aecf7a49238feae0c9d'
}
// Initialize Firebase
app.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = app.auth()

export { db, auth }
