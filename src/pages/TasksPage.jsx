import TasksList from "@/components/react-omponenets/TasksList";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/services/api.service";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const [loggedInUserTasks, setLoggedInUserTasks] = useState([]);
  const navigate = useNavigate();
  // console.log(loggedInUser);

  useEffect(() => {
    async function fetchLoggedInUserTasks() {
      try {
        const res = await api.get("/task");
        setLoggedInUserTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoggedInUserTasks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-extrabold p-10">
        {loggedInUser && `${loggedInUser.firstName}'s Tasks`}
      </h1>
      <div className="flex justify-center items-center ">
        <TasksList loggedInUserTasks={loggedInUserTasks} />
      </div>
      <Outlet />
    </div>
  );
}

export default TasksPage;
