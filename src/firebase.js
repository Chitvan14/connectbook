import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDFtSpUWZH--khl09OVSxEmh9RWe5jlJhE",
  authDomain: "hashnode-db.firebaseapp.com",
  projectId: "hashnode-db",
  storageBucket: "hashnode-db.appspot.com",
  messagingSenderId: "140634335064",
  appId: "1:140634335064:web:aee0e190dea8261ed6672d",
  measurementId: "G-N6M2LFMY9C"
};

  const firbaseApp = firebase.initializeApp(firebaseConfig);
  const db = firbaseApp.firestore();

  //auth  allow to login 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;



