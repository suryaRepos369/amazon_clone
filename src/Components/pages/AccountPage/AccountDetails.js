import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import { ProgressBar } from "react-loader-spinner";
import useAuth from "./../../../hooks/useAuth";
import { AxiosClient } from "./../../../http/axios/axiosClient";
import Skeleton from "@mui/material/Skeleton";

const AccountDetails = () => {
  const [post, setPost] = React.useState("");
  const { auth } = useAuth();
  //every component mount and update

  // useEffect(() => {
  //   if (auth) {
  //     let url = "/users/me";
  //     var t = localStorage.getItem("rrtfaca");
  //     AxiosClient.get(url, {
  //       headers: {
  //         Authorization: `Bearer ${t}`,
  //       },
  //     })
  //       .then((res) => {
  //         let a = res.data.email;
  //         console.log("a:", a);
  //         setPost(a);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  function userDataLoader() {
    if (auth) {
      let url = "/users/me";
      AxiosClient.get(url)
        .then((res) => {
          let a = res.data.email;
          console.log("a:", a);
          setPost(a);
        })
        .catch((err) => {
          //  console.log(err);
          let a = err.message;
          setPost(a);
        });
    }
  }
  return (
    <>
      <div className="card w-100 h-100">
        <h3 className="lead text-center bg-yellow-300 p-3">Personal details</h3>
      </div>
      <div className="card  border-0 justify-center flex flex-row ">
        <div className="col-3 card  m-3 border-0 ">
          <Accordion
            onClick={userDataLoader}
            className="m-0 p-0 border-0">
            <AccordionSummary
              sx={{
                margin: 0,
                padding: "1px",
              }}
              expandIcon={<ExpandMoreIcon className="p-0 m-0" />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <p className="cart-title text-md m-0 font-medium p-0">User Details</p>
            </AccordionSummary>
            <AccordionDetails className="m-0 p-1 ">
              <div className="flex gap-5">
                <p>Email:</p>
                <p>
                  {post ? (
                    post
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                    />
                  )}
                </p>
              </div>
              <div className="flex gap-5">
                <p>Email:</p>
                <p>
                  {post ? (
                    post
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                    />
                  )}
                </p>
              </div>
              <div className="flex gap-5">
                <p>Email:</p>
                <p>
                  {post ? (
                    post
                  ) : (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                    />
                  )}
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="card  m-3  text-sm border-0">
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
        <div className="card  m-3 text-sm border-0">
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
