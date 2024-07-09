import React from "react";
import TaskItem from "./TaskItem";

function TasksList({ loggedInUserTasks }) {
  return (
    <ul className="flex  flex-wrap gap-4">
      {loggedInUserTasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </ul>
  );
}

export default TasksList;
