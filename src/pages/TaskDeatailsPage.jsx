import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import api from "@/services/api.service";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";

function TaskDeatailsPage() {
  const [task, setTask] = useState(null);
  const { taskId } = useParams();

  useEffect(() => {
    async function fetchTask() {
      try {
        const { data: taskFetched } = await api.get(`task/${taskId}`);
        setTask(taskFetched);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTask();
  }, []);

  if (!task) {
    return;
  }

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col border border-ring p-10 max-w-96 bg-secondary rounded-lg shadow-2xl space-y-4">
        <Button>
          <Link to={"/tasks"}>close</Link>
        </Button>
        <h1 className="text-2xl">{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.body}</p>;
        {task.todoList.length > 0 ? (
          <ul>
            {task.todoList.map((todo) => {
              return (
                <li key={todo._id}>
                  {/* <input type="checkbox" checked={todo.isComplete} /> */}
                  <label className={todo.isComplete ? "line-through" : null}>
                    {todo.title}
                  </label>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No todos yet...</p>
        )}
        <div>
          {/* <input type="checkbox" checked={task.isPinned} /> */}
          {task.isPinned ? <Badge className="">Pinned</Badge> : null}
        </div>
      </div>
    </>
  );
}

export default TaskDeatailsPage;
