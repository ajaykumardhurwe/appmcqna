// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const firestore = firebase.firestore();
// export default firebase;



















import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Firebase Config (Replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyCj8m1ejJULAqOUyUvrbaPk1egh29rE2Mw",
  authDomain: "mcqna-81f01.firebaseapp.com",
  projectId: "mcqna-81f01",
  storageBucket: "mcqna-81f01.firebasestorage.app",
  messagingSenderId: "209670975983",
  appId: "1:209670975983:web:c8a52a0ce8200cb6ee861a",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc, updateDoc };
