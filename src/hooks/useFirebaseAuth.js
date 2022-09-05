import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./../Redux_Store/Auth/AuthSlice";

import { auth } from "../firebaseAuth/auth";
import { React } from "react";

const useFirebaseAuth = (email, password) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.islogged);

  const [user, setUser] = React.useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return { user, signup };
};

export default useFirebaseAuth;
