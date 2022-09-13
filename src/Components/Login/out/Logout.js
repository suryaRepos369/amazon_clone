import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   console.log("Signing out and clearing all storages.......");
  //   logout();
  //   navigate("/home");
  // });

  return (
    <>
      <div className="lead tex-muted flex justify-center">
        <h2 className="lead justify-center">Signing Out ....</h2>
        {logout()}
      </div>
    </>
  );
};

export default Logout;
