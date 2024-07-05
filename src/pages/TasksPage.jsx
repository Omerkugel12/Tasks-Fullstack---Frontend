import TasksList from "@/components/react-omponenets/TasksList";
import { useAuth } from "@/contexts/AuthContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  // const [loggedInUserTasks, setLoggedInUserTasks] = useState([]);
  const navigate = useNavigate();

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
      <Link
        to={"/tasks/create"}
        className="absolute top-28 right-6  bg-primary p-4 rounded-xl text-secondary shadow-2xl hover:"
      >
        Create new task
      </Link>
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
