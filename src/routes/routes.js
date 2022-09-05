import Home from "../Components/pages/Homepage/HomePage";
import Dress from "../Components/Dress/ProductFeed";
import { LoginForm, SignupForm, CartComponent } from "../Components";
import NotfoundPage from "../Components/pages/404/NotfoundPage";
import Accounts from "../Components/pages/AccountPage/Account";

export const routes = [
  {
    path: "/accounts",
    name: "Account",
    component: Accounts,
    topHeader: true,
    admin: true,
    banner: false,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    topHeader: true,
    admin: true,
    banner: true,
  },
  {
    path: "/login",
    name: "Loginform",
    component: LoginForm,
    topHeader: false,
    admin: true,
    banner: false,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupForm,
    topHeader: false,
    admin: true,
    banner: false,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartComponent,
    topHeader: true,
    admin: true,
    banner: false,
  },
  {
    path: "*",
    name: "notfound",
    component: NotfoundPage,
    topHeader: false,
    admin: true,
    banner: false,
  },
  {
    path: "/dress",
    name: "dress",
    component: Dress,
    topHeader: true,
    admin: true,
    banner: false,
  },
];
