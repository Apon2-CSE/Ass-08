import React, { memo } from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <>
      <div className="">
        <Navbar />

        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default memo(Root);
