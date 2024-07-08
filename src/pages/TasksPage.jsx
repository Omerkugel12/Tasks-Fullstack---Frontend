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
import { Skeleton } from "@/components/ui/skeleton";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const [display, setDisplay] = useState("");
  const [loading, setLoading] = useState(false);

  const pinnedTasks = loggedInUserTasks.filter((task) => task.isPinned);
  const otherTasks = loggedInUserTasks.filter((task) => !task.isPinned);

  useEffect(() => {
    setLoading(true);
    console.log("display", display);
    async function fetchLoggedInUserTasks() {
      try {
        const res = await api.get("/task");
        setLoggedInUserTasks(res.data);
        setLoading(false);
        console.log("display", display);
      } catch (error) {
        console.log(error);
      }
    }
    // setTimeout(() => {
    fetchLoggedInUserTasks();
    // }, 5000);
  }, []);

  return (
    <>
      {loading && "table" ? (
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default TasksPage;
