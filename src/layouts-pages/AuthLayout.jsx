import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <div className="flex justify-center items-center h-screen p-6 px-20">
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
