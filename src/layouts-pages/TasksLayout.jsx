import React from "react";
import { Outlet } from "react-router";

function TasksLayout() {
  return (
    <>
      <h1>TasksLayout</h1>
      <Outlet />
    </>
  );
}

export default TasksLayout;
