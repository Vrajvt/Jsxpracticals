import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE3e0g9uslCzzlpcMy6mefRrWuy0VxCfg",
  authDomain: "auth-fb1e1.firebaseapp.com",
  projectId: "auth-fb1e1",
  storageBucket: "auth-fb1e1.appspot.com",
  messagingSenderId: "804559383018",
  appId: "1:804559383018:web:d54db5d39edb21c42eaa93",
  measurementId: "G-E7MGX4W9C9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();