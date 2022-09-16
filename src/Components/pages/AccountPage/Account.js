import React from "react";
import useAuth from "./../../../hooks/useAuth";
import LogoutComp from "../../Login/out/Logout";
import AccountDetails from "./AccountDetails";
const Account = () => {
  const { auth } = useAuth();

  return (
    <>
      <div className="row bg-white min-h-full">
        <div className="col-10 bg-white m-auto my-4 border border-2 h-fit  ">
          <h2 className="lead-text">Accounts page</h2>
          <LogoutComp />
          <div>{auth && <AccountDetails />}</div>
        </div>
      </div>
    </>
  );
};

export default Account;
