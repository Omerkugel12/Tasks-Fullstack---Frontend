import TasksList from "@/components/react-omponenets/TasksList";
import { useAuth } from "@/contexts/AuthContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const navigate = useNavigate();

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
      <h1 className="text-5xl font-extrabold p-10">
        {loggedInUser && `${loggedInUser.firstName}'s Tasks`}
      </h1>
      <div className="flex flex-col gap-6 ">
        {pinnedTasks.length > 0 && (
          <>
            <div className="shadow-2xl p-8">
              <h2 className="text-center text-3xl font-bold mb-4">
                Pinned Tasks
              </h2>
              <TasksList loggedInUserTasks={pinnedTasks} />
            </div>
          </>
        )}
        {otherTasks.length > 0 && (
          <>
            <div className="shadow-2xl p-8">
              <h2 className="text-center text-3xl font-bold mb-4">Tasks</h2>
              <TasksList loggedInUserTasks={otherTasks} />
            </div>
          </>
        )}
      </div>
      {pinnedTasks.length === 0 && otherTasks.length === 0 && (
        <p>No Tasks yet...</p>
      )}
      <Outlet />
    </div>
  );
}

export default TasksPage;
