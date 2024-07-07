import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import { Grid3X3, LayoutGrid } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import TasksTable from "@/components/react-omponenets/TasksTable";
import TasksCards from "@/components/react-omponenets/TasksCards";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const [display, setDisplay] = useState("");

  const pinnedTasks = loggedInUserTasks.filter((task) => task.isPinned);
  const otherTasks = loggedInUserTasks.filter((task) => !task.isPinned);

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
      {display === "cards" ? (
        <Button
          onClick={() => setDisplay("table")}
          className="absolute top-28 left-6"
        >
          <Grid3X3 size={32} color="#ffffff" />
        </Button>
      ) : (
        <Button
          onClick={() => setDisplay("cards")}
          className="absolute top-28 left-6"
        >
          <LayoutGrid size={32} color="#ffffff" />
        </Button>
      )}
      <h1 className="text-5xl font-extrabold p-10">
        {loggedInUser && `${loggedInUser.firstName}'s Tasks`}
      </h1>
      {display === "cards" ? <TasksCards /> : <TasksTable />}
      {pinnedTasks.length === 0 && otherTasks.length === 0 && (
        <p>No Tasks yet...</p>
      )}
      <Outlet />
    </div>
  );
}

export default TasksPage;
