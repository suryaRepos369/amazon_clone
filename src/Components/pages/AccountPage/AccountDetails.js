import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
//import { ProgressBar } from "react-loader-spinner";
//import useAuth from './../../../hooks/useAuth';
const AccountDetails = () => {
  const user = useSelector((state) => state.auth.userData);
 

  return (
    <>
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
                  <div className="card-content bg-slate-100 text-">
                    <p>{user.displayName}</p>
                  </div>
                  <h6 className="cart-title">Email</h6>
                  <div className="card-content bg-slate-100 text-xs">
                    <p>{user.email}</p>
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
    </>
  );
};

export default AccountDetails;
