import Accounts from "../Components/pages/AccountPage/Account";
import { CartComponent } from "../Components";
import NotfoundPage from "../Components/pages/404/NotfoundPage";

export const routes = [
  {
    path: "/accounts",
    name: "Account",
    component: Accounts,
    topHeader: true,
    admin: true,
    banner: true,
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
