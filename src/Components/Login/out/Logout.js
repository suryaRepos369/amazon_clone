import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProgressBar } from "react-loader-spinner";

const Logout = () => {
  const { auth, logoutServerFunc, logoutLoading, logoutMessage, signoutPage, logoutError } = useAuth();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   console.log("Signing out and clearing all storages.......");
  //   logout();
  //   navigate("/home");
  // });

  return (
    <>
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
              onClick={() => {
                logoutServerFunc();
              }}
              className="link border border-2 bg-yellow-500 rounded-md hover:text-black m-3 px-3 py-1">
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
              className="link border border-2 bg-yellow-500 rounded-md hover:text-black m-3 px-3 py-1">
              Sign in{" "}
            </button>
          </p>
        </div>
      )}
      {logoutError && (
        <div className="lead border border-2 border-danger p-0 flex-grow justify-center text-center ">
          <div>There is a problem</div>

          <p className="text-red-500 font-semibold"> {logoutError}</p>
        </div>
      )}
      {logoutLoading ? (
        <div className="lead  p-0 flex-grow justify-center text-center flex-grow ">
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
      {!auth && logoutError && (
        <div className="m-0 p-0">
          <p className="lead text text-center m-0 p-0">{logoutMessage}</p>
        </div>
      )}
      {auth && (
        <div>
          <div className="card w-100 h-100">
            <h3 className="lead text-center bg-yellow-300 p-3">Personal details</h3>
          </div>
          <div className="col card card-col flex-row border-0">
            <div className="card w-80 m-3 border-0">
              <Accordion className="m-0 p-0 border-0">
                <AccordionSummary
                  className="px-1 m-0"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <p className="cart-title text-sm m-0">User Details</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="card">
                    <div className="card-body">
                      <h6 className="cart-title">User Name</h6>
                      <div className="card-content bg-slate-100">
                        <p>{"surya@gmail.com"}</p>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card w-80 m-3  text-sm border-0">
              <Accordion className="m-0 p-0">
                <AccordionSummary
                  className="px-1 m-0"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <p className=" m-0 p-1 ">Your Orders</p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="card w-80 m-3 text-sm border-0">
              <Accordion className="m-0 p-0">
                <AccordionSummary
                  className="px-1 m-0"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <p className=" m-0 p-0"> settings</p>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
