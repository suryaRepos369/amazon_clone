import React, { Suspense, Spinner } from "react";
import Header from "./../Components/Hea/Header";
import Banner from "../Components/pages/Homepage/HomeBanner";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Layout = (props) => {
  return (
    <>
      {props.topheader && <Header></Header>}
      {props.banner && (
        <Suspense fallback={<h1>banner Loading</h1>}>
          <Banner />
        </Suspense>
      )}

      {/* <Outlet /> */}
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        {props.children}
      </Suspense>
    </>
  );
};

export default Layout;
