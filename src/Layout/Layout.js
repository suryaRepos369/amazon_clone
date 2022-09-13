import React, { Suspense, Spinner } from "react";
import Header from "./../Components/Hea/Header";
import Banner from "../Components/pages/Homepage/HomeBanner";
import Box from "@mui/material/Box";
import { ThreeCircles, ProgressBar } from "react-loader-spinner";
import { Divider } from "@mui/material/Divider";
const Layout = (props) => {
  return (
    <>
      {props.topheader && <Header></Header>}
      {props.banner && (
        <Suspense
          fallback={
            <ProgressBar
              className="mx-auto my-52"
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#F4442E"
              barColor="#51E5FF"
            />
          }
        >
          <Banner />
        </Suspense>
      )}

      {/* <Outlet /> */}
      <Suspense
        fallback={
          <div className="mx-48 my-52 flex justify-center bg-white">
            <ThreeCircles
              height="100"
              width="100"
              color="white"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor="yellow"
              innerCircleColor="amazonblue"
              middleCircleColor="orange"
            />
          </div>
        }
      >
        {props.children}
      </Suspense>
    </>
  );
};

export default Layout;
