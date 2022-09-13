import {
  Home,
  Dress,
  LoginForm,
  SignupForm,
  Signout,
  Nfp404,
  Cart,
  AccountsPage,
  ProductDetail,
  Checkout,
} from "../Components";
// import NotfoundPage from "../Components/pages/404/NotfoundPage";
// import Accounts from "../Components/pages/AccountPage/Account";
// import Cart from "../Components/cart/Cart";
// import ProductDetail from "../Components/pages/ProductDetail/ProductDetail";
export const routes = [
  {
    path: "/account",
    name: "Account",
    component: AccountsPage,
    topHeader: true,
    role: "user",
    banner: false,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    topHeader: true,
    role: "guest",

    banner: true,
  },
  {
    path: "/login",
    name: "Loginform",
    component: LoginForm,
    topHeader: false,
    role: "guest",
    banner: false,
  },
  {
    path: "/signout",
    name: "Signout page",
    component: Signout,
    topHeader: false,
    role: "user",
    banner: false,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupForm,
    topHeader: false,
    banner: false,
    role: "guest",
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    topHeader: true,
    banner: false,
    role: "guest",
  },
  {
    path: "*",
    name: "notfound",
    component: Nfp404,
    topHeader: false,
    banner: false,
    role: "guest",
  },
  {
    path: "/mens",
    name: "dress",
    component: Dress,
    topHeader: true,
    banner: false,
    role: "guest",
  },
  {
    path: "/product/:productId",
    name: "productDetail",
    component: ProductDetail,
    topHeader: true,
    banner: false,
    role: "guest",
  },
  {
    path: "/checkout",
    name: "Check out",
    component: Checkout,
    topHeader: true,
    banner: false,
    role: "user",
  },
];
