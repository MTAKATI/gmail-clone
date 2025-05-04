// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw4_g6SJtckRCnWddsu_mVFui7cadXjWs",
  authDomain: "clone-37b9b.firebaseapp.com",
  projectId: "clone-37b9b",
  storageBucket: "clone-37b9b.firebasestorage.app",
  messagingSenderId: "974122712068",
  appId: "1:974122712068:web:36bc9f81185578eae88951",
  measurementId: "G-Z27XR0LS2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, serverTimestamp };