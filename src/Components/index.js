import React from "react";
import LoginForm from "./Login/Login";
import SignupForm from "./Login/Signup";
import CartComponent from "./cart/Cart";

const Banner = React.lazy(() => import("./Banner/Banner"));
//const SignupForm = lazy(() => import("./Login/Signup"));
export { LoginForm, SignupForm, Banner, CartComponent };
