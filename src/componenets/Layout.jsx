import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
