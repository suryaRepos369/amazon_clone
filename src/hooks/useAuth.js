import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./../Redux_Store/Auth/AuthSlice";
import { fetchUserData } from "../Redux_Store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { defaultConfig } from "../Components/DefaultConfig/DefaultConfig";

const { loginPage, signoutPage } = defaultConfig;
const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.islogged);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  //   console.log("islogged:", islogged);
  const login = async (data) => {
    console.log("data:", data);

    await dispatch(fetchUserData(data));
    return auth;
  };

  const logout = () => {
    dispatch(authActions.logout());
    navigate(signoutPage);
  };

  return { auth, login, logout, loading, error, loginPage };
};

export default useAuth;
