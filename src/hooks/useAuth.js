import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./../Redux_Store/Auth/AuthSlice";
import { fetchUserData } from "../Redux_Store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { defaultConfig } from "../Components/DefaultConfig/DefaultConfig";
import { logoutServer } from "../Redux_Store/Auth/AuthSlice";
const { loginPage, signoutPage } = defaultConfig;
const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.islogged);
  const loading = useSelector((state) => state.auth.loading);
  const logoutLoading = useSelector((state) => state.auth.logoutLoading);
  const logoutError = useSelector((state) => state.auth.logoutError);
  const logoutMessage = useSelector((state) => state.auth.logoutMessage);
  const error = useSelector((state) => state.auth.error);
  //   console.log("islogged:", islogged);
  const login = async (data) => {
    //console.log("data:", data);

    await dispatch(fetchUserData(data));
    return auth;
  };

  const logout = () => {
    return dispatch(logoutServer());
  };

  return {
    auth,
    login,
    logout,
    loading,
    error,
    signoutPage,
    loginPage,
    logoutLoading,
    logoutError,
    logoutMessage,
  };
};

export default useAuth;
