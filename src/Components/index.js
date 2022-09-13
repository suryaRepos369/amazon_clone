import React from "react";
const Banner = React.lazy(() => import("./Banner/Banner"));
const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));
const LoginForm = React.lazy(() => import("./Login/Login"));
const SignupForm = React.lazy(() => import("./Login/Signup"));
const Signout = React.lazy(() => import("./Login/out/Logout"));
const CartComponent = React.lazy(() => import("./cart/Cart"));
const Nfp404 = React.lazy(() => import("../Components/pages/404/NotfoundPage"));
const AccountsPage = React.lazy(() =>
  import("../Components/pages/AccountPage/Account")
);
const Cart = React.lazy(() => import("../Components/cart/Cart"));
const Home = React.lazy(() => import("../Components/pages/Homepage/HomePage"));
const Dress = React.lazy(() => import("../Components/Dress/ProductFeed"));

const ProductDetail = React.lazy(() =>
  import("../Components/pages/ProductDetail/ProductDetail")
);

export {
  Home,
  Dress,
  LoginForm,
  SignupForm,
  Banner,
  CartComponent,
  Signout,
  Checkout,
  Nfp404,
  AccountsPage,
  Cart,
  ProductDetail,
};
