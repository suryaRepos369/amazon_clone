import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import { ProgressBar } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const { auth, logout, logoutLoading, signoutPage, logoutError } = useAuth();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   console.log("Signing out and clearing all storages.......");
  //   logout();
  //   navigate("/home");
  // });

  async function logoutHandler() {
    console.log("logout clicked");
    let res = logout();

    console.log("res:", res);

    toast.promise(
      res,
      {
        pending: "Logging out...",
        // success: "Logged out  👌",
        // error: `Error :${logoutError}`,
      },
      { autoClose: 1000 }
    );
  }
  return (
    <>
      <ToastContainer />
      {auth ? (
        <div className="flex justify-between">
          <Avatar
            className="m-2"
            //provide the server avatar value here
            alt={"surya"}
            src={"fsdf"}
            sx={{ width: 56, height: 56 }}
          />
          <p className="text-right bg-white ">
            <button
              onClick={logoutHandler}
              className="link border-2 bg-yellow-500 rounded-md hover:text-black m-3 px-3 py-1">
              Log out{" "}
            </button>
          </p>
        </div>
      ) : (
        <div>
          <h4 className="lead">Logged out .. .. ..</h4>
          <p className="text-right bg-white ">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="link border-2 bg-yellow-500 rounded-md hover:text-black m-3 px-3 py-1">
              Sign in{" "}
            </button>
          </p>
        </div>
      )}
      {logoutError && (
        <div className="lead  border-2 border-danger p-0 flex-grow justify-center text-center ">
          <div>There is a problem</div>

          <p className="text-red-500 font-semibold"> {logoutError}</p>
        </div>
      )}
      {logoutLoading ? (
        <div className="lead  p-0 justify-center text-center flex-grow ">
          <ProgressBar
            className="mx-auto "
            height="80"
            width="480"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="yellow"
          />
        </div>
      ) : null}
    </>
  );
};

export default Logout;
