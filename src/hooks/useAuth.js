import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./../Redux_Store/Auth/AuthSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.islogged);
  //   console.log("islogged:", islogged);
  const login = () => {
    dispatch(authActions.login());
  };
  const logout = () => {
    dispatch(authActions.logout());
  };

  return { auth, login, logout };
};

export default useAuth;
