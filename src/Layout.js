import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
// import Snowfall from "./Snowfall";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Snowfall /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
