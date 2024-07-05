import React from "react";
import { Outlet } from "react-router";

function TasksLayout() {
  return (
    <div className="p-6 px-20">
      <h1>TasksLayout</h1>
      <Outlet />
    </div>
  );
}

export default TasksLayout;
