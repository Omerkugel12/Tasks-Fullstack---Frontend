import React from "react";
import TaskItem from "./TaskItem";

function TasksList({ loggedInUserTasks }) {
  return (
    <ul className="flex flex-wrap gap-10 justify-center">
      {loggedInUserTasks.map((task) => {
        return <TaskItem key={task._id} task={task} />;
      })}
    </ul>
  );
}

export default TasksList;
