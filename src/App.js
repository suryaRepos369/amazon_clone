import "./App.css";
import { React } from "react";
import { useSelector } from "react-redux";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./Layout/Layout";
import useAuth from "./hooks/useAuth";
import RequireAuth from "./Components/RequireAuth";
function App() {
  // setting the route through the layout component
  const getRoutes = (route, key) => {
    let Component = route?.component;
    if (route?.role === "user") {
      return (
        <Route
          key={key}
          path={route?.path}
          element={
            <Layout topheader={route?.topHeader} banner={route?.banner}>
              <RequireAuth role={route?.role}>
                <Component />
              </RequireAuth>
            </Layout>
          }
        />
      );
    }
    return (
      <Route
        key={key}
        path={route?.path}
        element={
          <Layout topheader={route?.topHeader} banner={route?.banner}>
            <Component />
          </Layout>
        }
      />
    );
  };

  return (
    <div className="bg-gray-100">
      <title>Amazon</title>
      <Routes>
        {routes.map((route, key) => {
          return getRoutes(route, key);
        })}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
{
  /* <Route path="/" element={<Header />}></Route>
        <Route path="/dress" element={<DressFeed />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route> */
}
