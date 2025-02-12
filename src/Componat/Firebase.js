import { initializeApp } from "firebase/app";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, 
  sendPasswordResetEmail, onAuthStateChanged 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyEq27B4u4kKQLOzqh0NI4NZsK6_lh-dA",
  authDomain: "react-1ca72.firebaseapp.com",
  projectId: "react-1ca72",
  storageBucket: "react-1ca72.appspot.com",
  messagingSenderId: "300985945917",
  appId: "1:300985945917:web:cb7369ea4d5b1611d4bf54",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
  auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, sendPasswordResetEmail, onAuthStateChanged 
};