import { useState } from 'react';
import {auth, provider} from '../firebaseAuth/firebaseConfig'
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { loginServer } from './../Redux_Store/Auth/AuthSlice';


const useFirebaseAuth = () => {
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState(localStorage.getItem('email') || '');

  const signInGoogle = () => {
   
        return  dispatch(loginServer());
       
  }
  
 

  // Add other authentication-related functions and states here if needed

  return { userEmail, signInGoogle };
};

export default useFirebaseAuth;
