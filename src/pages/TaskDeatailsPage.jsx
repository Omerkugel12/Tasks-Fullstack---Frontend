import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/contexts/ModalContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import { Pencil, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function TaskDeatailsPage() {
  const [task, setTask] = useState(null);
  const { taskId } = useParams();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const navigate = useNavigate();
  const { modal, setModal } = useModalContext();
  // console.log(taskId);

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

  async function handleDelete() {
    try {
      const { data: deletdTask } = await api.delete(`/task/${taskId}`);

      setLoggedInUserTasks((prevTasks) => {
        return prevTasks.filter((task) => task._id !== taskId);
      });
      navigate("/tasks");
      setModal("successDelete");
      setTimeout(() => {
        setModal(null);
      }, 5000);
    } catch (error) {
      console.log(error);
      setModal("failureDelete");
      setTimeout(() => {
        setModal(null);
      }, 5000);
    }
  }

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col border border-ring p-10 max-w-lg min-w-[32rem] bg-secondary rounded-lg shadow-2xl space-y-4">
        <Link className="fixed top-2 left-2" to={"/tasks"}>
          <X color="#ff0000" />
        </Link>
        <h1 className="text-2xl">{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.body}</p>
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
        <div className="flex gap-4 absolute bottom-4 right-4">
          <Button
            onClick={handleDelete}
            variant="outlet"
            className="text-destructive border border-destructive hover:bg-destructive/90"
          >
            <Trash2 className="text-destructive" />
          </Button>
          <Button
            variant="outlet"
            className="text-destructive border border-primary hover:bg-primary/90"
          >
            <Pencil className="text-primary" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default TaskDeatailsPage;
