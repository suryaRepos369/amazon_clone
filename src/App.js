import "./App.css";
import { React } from "react";
import Header from "./Components/Hea/Header";
import DressFeed from "./Components/Dress/ProductFeed";
import { useSelector } from "react-redux";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { LoginForm, SignupForm, CartComponent } from "./Components";
import { routes } from "./routes";
import Layout from "./Layout/Layout";
function App() {
  const showHome = useSelector((state) => state.home.showHome);
  const isDressOpen = useSelector((state) => state.dress.showDressComponent);
  let componentPresent = [isDressOpen];
  const check = componentPresent.some((valid) => valid === true);

  const getRoutes = (route, key) => {
    let Component = route?.component;
    // console.log("banner value", route.banner);

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

      {/* <Header></Header> */}
      <Routes>
        {routes.map((route, key) => {
          return getRoutes(route, key);
        })}
      </Routes>

      {/* Banner */}

      {!check && (
        <main className="max relative -w-screen-2xl mx-auto -z-0">
          {/* <Banner /> */}
        </main>
      )}

      <div className="relative  h-fit z-0">{/* <DressFeed /> */}</div>

      {isDressOpen && <DressFeed />}
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
