import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import React from "react";
import TasksList from "./TasksList";

function TasksCards() {
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const pinnedTasks = loggedInUserTasks.filter((task) => task.isPinned);
  const otherTasks = loggedInUserTasks.filter((task) => !task.isPinned);

  return (
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
  );
}

export default TasksCards;
