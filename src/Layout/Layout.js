import React from "react";
import Header from "./../Components/Hea/Header";
import Banner from "../Components/pages/Homepage/HomeBanner";
import { Outlet } from "react-router-dom";
const Layout = (props) => {
  console.log("props for banner", props.banner);
  return (
    <>
      {props.topheader && <Header></Header>}
      {props.banner && <Banner />}

      {/* <Outlet /> */}
      {props.children}
    </>
  );
};

export default Layout;
