// App.js
import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Header />
      <div className="min-h-90 w-90 bg-gray-100  flex-col my-5 p-6 flex items-center justify-center mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Main;
