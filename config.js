import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9mjai2R_tz3ay83Nuvg5cD5G3tyL5s0c",
  authDomain: "my-first-project-ab4f7.firebaseapp.com",
  projectId: "my-first-project-ab4f7",
  storageBucket: "my-first-project-ab4f7.appspot.com",
  messagingSenderId: "961818700347",
  appId: "1:961818700347:web:af0c8f7cae965953a9ca1e"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();
