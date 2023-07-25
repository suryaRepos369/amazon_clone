// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBigb4LEELsIK-MBz9ML_1AWxM0NZj3tc4",
  authDomain: "react-auth-demo-eb9f7.firebaseapp.com",
  projectId: "react-auth-demo-eb9f7",
  storageBucket: "react-auth-demo-eb9f7.appspot.com",
  messagingSenderId: "482433890215",
  appId: "1:482433890215:web:fa84ded39c2074c6536882",
  measurementId: "G-T24EE0B7F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();


