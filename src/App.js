import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./Layout/Layout";
import RequireAuth from "./Components/RequireAuth";
import { ToastContainer, toast } from "react-toastify";

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
            <Layout
              topheader={route?.topHeader}
              banner={route?.banner}>
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
          <Layout
            topheader={route?.topHeader}
            banner={route?.banner}>
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
        <Route
          path="/"
          element={
            <Navigate
              to="/home"
              replace
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
