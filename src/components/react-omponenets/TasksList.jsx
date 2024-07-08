import React from "react";
import TaskItem from "./TaskItem";

function TasksList({ loggedInUserTasks }) {
  return (
    <ul className="grid grid-cols-3 gap-5 max-w-[100%]">
      {loggedInUserTasks.map((task) => {
        return <TaskItem key={task._id} task={task} />;
      })}
    </ul>
  );
}

export default TasksList;
