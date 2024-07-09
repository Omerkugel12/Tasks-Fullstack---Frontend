import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalContext } from "@/contexts/ModalContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import { X } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateTaskPage() {
  const { setLoggedInUserTasks } = useLoggedInUserTasks();
  const { setModal } = useModalContext();
  const navigate = useNavigate();

  async function handleCreateTask(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const body = formData.get("body");
    const todoList = formData
      .get("todos")
      .split(", ")
      .map((todo) => ({ title: todo.trim() }));
    const data = { title, description, body, todoList };

    try {
      const newTask = await api.post("/task", data);
      setLoggedInUserTasks((prevTasks) => {
        return [...prevTasks, newTask];
      });
      navigate("/tasks");
      setModal("successCreateTask");
      setTimeout(() => {
        setModal(null);
      }, 4000);
    } catch (error) {
      console.log(error);
      setModal("failureCreateTask");
    }
  }

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col border border-ring p-10 w-96  bg-secondary rounded-lg shadow-2xl space-y-4 max-w-72">
        <Link className="fixed top-2 left-2" to={"/tasks"}>
          <X color="#ff0000" />
        </Link>
        <h1 className="text-center text-3xl font-extrabold ">
          Create new task
        </h1>
        <form
          onSubmit={(ev) => handleCreateTask(ev)}
          className="flex flex-col space-y-4"
        >
          <div>
            <Label htmlFor="title">Task title:</Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Enter task title..."
            />
          </div>
          <div>
            <Label htmlFor="description">Task description:</Label>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Enter task description..."
            />
          </div>
          <div>
            <Label htmlFor="body">Task body:</Label>
            <Input
              id="body"
              name="body"
              type="text"
              placeholder="Enter task body..."
            />
          </div>
          <div>
            <Label htmlFor="todos">Task todos:</Label>
            <Input
              id="todos"
              name="todos"
              type="text"
              placeholder="Enter task todos..."
            />
          </div>
          <Button>Create</Button>
        </form>
      </div>
    </>
  );
}

export default CreateTaskPage;
