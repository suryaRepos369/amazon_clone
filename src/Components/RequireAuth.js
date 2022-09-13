import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
const RequireAuth = (props) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
