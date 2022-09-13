import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Box, IconButton, ListItemButton, List, ListItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
const Drawermenu = () => {
  //const islogged = useSelector((state) => state.auth.logged);
  const navigate = useNavigate();

  const [isDraweropen, setIsDrawerOpen] = React.useState(false);
  const { auth, logout } = useAuth();
  const menuContents = {
    Trending: ["Best Sellers", "New Releases ", "Movers and Shakers"],
    Department: [
      {
        title: "Mobiles and Computers ",
        path: "/mobiles",
      },
      {
        title: "TV , Kitchen Appliances ",
        path: "/electronis",
      },
      {
        title: "Men's Fashion ",
        path: "/mens",
      },
      {
        title: "Women's Fashion ",
        path: "/mens",
      },
      {
        title: "Books ",
        path: "/books",
      },
    ],
    Settings: [
      // "your account",
      // "settings",
      // "signIn",
      {
        title: "Your Account ",
        path: "/account",
      },
      {
        title: "Settings ",
        path: "/settings",
      },
      auth
        ? {
            title: "sign Out",
            //path: "/signout",
            func: logout,
          }
        : {
            title: "sign in",
            path: "/login",
          },
    ],
  };

  function getPaths(data, id) {
    return (
      <ListItem key={id} disablePadding>
        <ListItemButton
          onClick={() => {
            setIsDrawerOpen(false);
            if (data.func) data.func();
            else {
              navigate(data.path);
            }
          }}
          sx={{
            "&:hover": {
              color: "black",
              backgroundColor: "#b9bcbf",
            },
          }}
        >
          {data?.title}
        </ListItemButton>
      </ListItem>
    );
  }

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

            {menuContents.Department.map((data, id) => getPaths(data, id))}
          </List>
          <List disablePadding>
            <ListItem>
              <span className="font-bold text-2xl">Settings </span>
            </ListItem>

            {menuContents.Settings.map((data, id) => getPaths(data, id))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Drawermenu;
