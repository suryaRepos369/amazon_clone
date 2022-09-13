import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux/";
import MenuItem from "../Drawermenu/Drawermenu";
import { useNavigate, NavLink } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import logo from "./headerlogo.png";
const Header = (props) => {
  const { auth } = useAuth();
  const { cartQuantity } = useCart();

  const cartCount = useSelector((state) => state.dress.count);
  const navigate = useNavigate();
  const signinHandler = () => {
    navigate("/login");
  };
  const accountHandler = () => {
    navigate("/account");
  };

  <Drawer
    variant="temporary"
    anchor="left"
    open={true}
    onClose={() => alert("closed")}
  ></Drawer>;

  return (
    <div className="sticky top-0  z-30">
      {/* TopNavigation */}
      <div className="  top-0 flex items-center bg-slate-700 flex-grow py-0">
        <div className="mt-2 flex items-center flex-grow-0 mx-1 xs:flex-grow ">
          <img
            onClick={() => {
              navigate("/home");
            }}
            className="ml-3 cursor-pointer  link"
            src={logo}
            alt="Home Logo"
            width="82"
            height="82"
          />
        </div>
        {/* search */}
        <div className=" hidden mx-2 sm:flex items-center cursor-pointer flex-grow bg-yellow-300 h-10 rounded-sm hover:bg-yellow-600">
          <input
            className="p-1 h-full  w-6 rounded-l-md sm:flex-grow flex-shrink focus:outline-none"
            type="text"
          ></input>
          <SearchIcon sx={{ padding: "1px" }} />
        </div>

        {/* Right */}
        <div className="mx-6 flex md:text-sm  text-white items-center text-xs space-x-6 whitespace-nowrap">
          {auth ? (
            <div
              onClick={accountHandler}
              className="text-white mx-1 link-wo-a flex flex-col justify-around "
            >
              <p className="m-1">Hello {"surya"} </p>
              <p className="font-bold">Account&List</p>
            </div>
          ) : (
            <div
              onClick={signinHandler}
              className="text-white mx-1  flex flex-col justify-around "
            >
              <p className="m-1 mb-0  link-wo-a">Hello </p>
              <p className="font-bold link-wo-a">Signin </p>
            </div>
          )}

          <div className="link-wo-a">
            <p className="font-bold mb-0 mt-1">Orders</p>

            <p>Returns</p>
          </div>
          <div onClick={() => navigate("/cart")} className="link relative">
            <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full text-black font-bold  bg-orange-600 md:text-center md:right-10 ">
              {cartQuantity}
            </span>
            <ShoppingCartOutlinedIcon
              sx={{
                color: "white",
                width: "55px",
                height: "45px",
                "&:hover": { color: "yellow" },
              }}
            />
            <p className="hidden md:inline m-2 font-extrabold ">Cart</p>
          </div>
        </div>
      </div>
      {/* bottomNavigation */}
      <div className=" flex items-center gap-3 bg-[#232f3e] text-white ">
        <span className="flex">
          <MenuItem className="link" sx={{ ml: 3, mb: 0 }}></MenuItem>
          {/* <p className="link text-xs mb-0 mt-0 sm:text-[14px] ">All</p> */}
        </span>
        <p className="link text-xs mb-0 sm:text-[14px]">Prime Video</p>
        <NavLink
          className="link text-xs mb-0 sm:text-[14px] text-decoration-none  link"
          to="/mens"
        >
          {" "}
          Dress
        </NavLink>
        <p className="link text-xs mb-0 sm:text-[14px]">Amazon Business</p>

        <p className="link text-xs mb-0 sm:text-[14px]">Today Deals</p>
        <p className="link text-xs mb-0 sm:text-[14px] hidden md:inline-flex p-0 ">
          Mobiles
        </p>
        <p className="link text-xs mb-0 sm:text-[14px]  hidden md:inline-flex ">
          Computer
        </p>
        <p className="link text-xs mb-0 sm:text-[14px] hidden md:inline-flex ">
          Kitchen Appliances
        </p>
      </div>

      {/* Banner */}
      {/* {props.banner && (
        <main className="max relative -w-screen-2xl mx-auto -z-0">
          <Banner />
        </main>
      )} */}
    </div>
  );
};

export default Header;
