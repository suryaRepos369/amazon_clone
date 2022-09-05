import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  Box,
  Typography,
  IconButton,
  ListItemButton,
  List,
  ListItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { dressActions } from "../../Redux_Store/Dresses/dressSlice";

const Drawermenu = () => {
  //const islogged = useSelector((state) => state.auth.logged);
  const dispatch = useDispatch();

  const [isDraweropen, setIsDrawerOpen] = React.useState(false);

  const menuContents = {
    Trending: ["Best Sellers", "New Releases ", "Movers and Shakers"],
    Department: [
      "Mobiles and Computers",
      "TV, Appliances, Electronics",
      "Mens Fashion ",
      "Womens Fashion ",
      "Books",
      "Science and Technology ",
    ],
    Settings: [
      "your account",
      "settings",
      "signIn",
      // {
      //   title: "Your Account ",
      //   path: "/account",
      // },
      // {
      //   title: "Settings ",
      //   path: "/settings",
      // },
      // islogged
      //   ? {
      //       title: "sign Out",
      //       path: "/signout",
      //     }
      //   : {
      //       title: "sign in",
      //       path: "/signout",
      //     },
    ],
  };

  return (
    <>
      <IconButton
        aria-label=""
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <MenuIcon sx={{ color: "white" }}></MenuIcon>
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isDraweropen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          className="flex-row items-center"
          p={0}
          borderRadius="15px"
          width="250px"
          textAlign="center"
          justifyItems="center"
          role="presentation"
        >
          {/* signin Logo  */}
          <div className="sticky top-0 z-20 bg-[#232f3e] m-0 items-center  flex space-x-1 h-[50px] ">
            <>
              <Avatar
                sx={{ width: 32, height: 32, bgcolor: "black" }}
                className="mt-2 mb-2 ml-9 mr-3"
                src="hj"
              ></Avatar>
              <h3 className="mx-auto text-xl text-white font-bold">
                Hello {","} Sign In{" "}
              </h3>
            </>
          </div>
          {/* MenuContents */}
          <List disablePadding>
            <ListItem>
              <span className="font-bold text-2xl">Trending</span>
            </ListItem>

            {menuContents.Trending.map((data, id) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#b9bcbf",
                    },
                  }}
                >
                  {data}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem>
              <span className="font-bold text-2xl">Shop by Category </span>
            </ListItem>

            {menuContents.Department.map((data, id) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setIsDrawerOpen(false);
                    dispatch(dressActions.showDressComp());
                  }}
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#b9bcbf",
                    },
                  }}
                >
                  {data}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List disablePadding>
            <ListItem>
              <span className="font-bold text-2xl">Settings </span>
            </ListItem>

            {menuContents.Settings.map((data, id) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#b9bcbf",
                    },
                  }}
                >
                  {data}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawermenu;
