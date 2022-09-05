import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux/";
import { dressActions } from "../../Redux_Store/Dresses/dressSlice";
import MenuItem from "../Drawermenu/Drawermenu";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Banner } from "../../Components";

const Header = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.dress.count);
  const dress = useSelector((state) => state.dress.dressDetail);
  const navigate = useNavigate();
  const signinHandler = () => {
    navigate("/login");
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
            src="https://links.papareact.com/f90"
            alt="Smiley face"
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
          <div
            onClick={signinHandler}
            className="text-white mx-1 link flex flex-col justify-around "
          >
            <p className="m-1">Hello SignIn </p>
            <p className="font-bold">Account&List</p>
          </div>

          <div className="link">
            <p className="font-bold mb-0">Orders</p>

            <p>Returns</p>
          </div>
          <div onClick={() => navigate("/cart")} className="link relative">
            <span className="absolute top-0 right-0 h-5 w-5 text-center rounded-full text-black font-bold  bg-yellow-300 md:text-center md:right-10 ">
              {cartCount}
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
      <div className=" flex items-center space-x-3 p-0  pl-2 bg-[#232f3e] text-white">
        <p className="flex font-small link  mt-0">
          <MenuItem sx={{ ml: 3, my: "1px" }} />
        </p>
        <p className="link text-xs sm:text-[16px]">All</p>
        <p className="link text-xs sm:text-[16px]">Prime Video</p>
        <p className="link text-xs sm:text-[16px]">Amazon Business</p>

        <p className="link text-xs sm:text-[16px]">Today Deals</p>
        <p className="link text-xs sm:text-[16px] hidden md:inline-flex p-0  hover:outline-dotted">
          Mobiles
        </p>
        <p className="link text-xs sm:text-[16px]  hidden md:inline-flex hover:outline-dotted">
          Computer
        </p>
        <p className="link text-xs sm:text-[16px] hidden md:inline-flex hover:outline-dotted">
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
