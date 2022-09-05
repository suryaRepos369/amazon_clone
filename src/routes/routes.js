import Home from "../Components/pages/Homepage/HomePage";
import Dress from "../Components/Dress/ProductFeed";
import { LoginForm, SignupForm, CartComponent } from "../Components";
import NotfoundPage from "../Components/pages/404/NotfoundPage";
import Accounts from "../Components/pages/AccountPage/Account";

export const routes = [
  {
    path: "/account",
    name: "Account",
    component: Accounts,
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
    component: CartComponent,
    topHeader: true,
    banner: false,
    role: "user",
  },
  {
    path: "*",
    name: "notfound",
    component: NotfoundPage,
    topHeader: false,
    banner: false,
    role: "guest",
  },
  {
    path: "/dress",
    name: "dress",
    component: Dress,
    topHeader: true,
    banner: false,
    role: "guest",
  },
];
