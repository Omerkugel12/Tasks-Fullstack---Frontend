import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalContext } from "@/contexts/ModalContext";
import api from "@/services/api.service";
import { Pencil, Pin, PinOff, Trash2, Vote, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function TaskDetailsPage() {
  const [task, setTask] = useState(null);
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { modal, setModal } = useModalContext();
  const [editTodoInput, setEditTodoInput] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [createNewTodoTitle, setCreateNewTodoTitle] = useState("");
  const [editTaskInputs, setEditTaskInputs] = useState(false);

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
  }, [taskId]);

  if (!task) {
    return null;
  }

  async function handleEditTask(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTitle = formData.get("title");
    const newDescription = formData.get("description");
    const newBody = formData.get("body");
    const data = { newTitle, newDescription, newBody };
    console.log(data);

    try {
      const { data: updatedTask } = await api.patch(`task/${taskId}`, {
        title: newTitle === "" ? task.title : newTitle,
        description: newDescription === "" ? task.description : newDescription,
        body: newBody === "" ? task.body : newBody,
      });
      setTask(updatedTask);
      setEditTaskInputs(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`task/${taskId}`);
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

  async function handlePinnedChange(e, taskId) {
    try {
      const res = await api.patch(`task/${taskId}`, {
        isPinned: !task.isPinned,
      });
      const updatedTask = res.data;
      setTask((prevTask) => ({ ...prevTask, isPinned: updatedTask.isPinned }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleTodoChecked(e, todoId) {
    try {
      const updatedTodoList = task.todoList.map((todo) =>
        todo._id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
      );

      const res = await api.patch(`task/${task._id}`, {
        todoList: updatedTodoList,
      });

      const updatedTask = res.data;
      setTask(updatedTask);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTodo(todoId, taskId) {
    try {
      const updatedTodoList = task.todoList.filter(
        (todo) => todo._id !== todoId
      );
      const res = await api.patch(`task/${taskId}`, {
        todoList: updatedTodoList,
      });
      const updatedTask = res.data;
      setTask(updatedTask);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateTodo(e, todoId, taskId) {
    e.preventDefault();

    try {
      const updatedTodoList = task.todoList.map((todo) =>
        todo._id === todoId
          ? {
              ...todo,
              isComplete: false,
              title: newTodoTitle ? newTodoTitle : todo.title,
            }
          : todo
      );

      const res = await api.patch(`task/${taskId}`, {
        todoList: updatedTodoList,
      });

      const updatedTask = res.data;
      setTask(updatedTask);
      setEditTodoInput(null);
      setNewTodoTitle("");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateTodo(e, taskId) {
    e.preventDefault();
    try {
      const newTodo = { title: createNewTodoTitle, isComplete: false };
      const updatedTodoList = [...task.todoList, newTodo];

      const res = await api.patch(`task/${taskId}`, {
        todoList: updatedTodoList,
      });

      const updatedTask = res.data;

      setTask(updatedTask);
      setCreateNewTodoTitle("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col border border-ring p-10 max-w-lg min-w-[32rem] bg-secondary rounded-lg shadow-2xl space-y-4 max-h-[70%] overflow-y-scroll">
        <Link className="fixed top-2 left-2" to={"/tasks"}>
          <X color="#ff0000" />
        </Link>
        <div className="space-y-8 pb-12">
          <form onSubmit={(e) => handleEditTask(e)}>
            {!editTaskInputs ? (
              <h1 className="text-2xl">{task.title}</h1>
            ) : (
              <div>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter new task title..."
                />
              </div>
            )}
            {!editTaskInputs ? (
              <p>
                <span className="font-bold">Description:</span>{" "}
                {task.description}
              </p>
            ) : (
              <div>
                <Label className="font-bold">Description:</Label>
                <Input
                  name="description"
                  type="text"
                  placeholder="Enter new task description..."
                />
              </div>
            )}
            {!editTaskInputs ? (
              <p>
                <span className="font-bold">Body:</span> {task.description}
              </p>
            ) : (
              <div>
                <Label className="font-bold">Body:</Label>
                <Input
                  type="text"
                  name="body"
                  placeholder="Enter new task body..."
                />
              </div>
            )}
            {editTaskInputs ? <Button>Apply</Button> : null}
          </form>
          <div className="bg-white py-4 rounded-lg flex flex-col px-10 gap-4">
            {task.todoList.length > 0 ? (
              <ul className="flex flex-col space-y-4">
                {task.todoList.map((todo) => {
                  return (
                    <li key={todo._id}>
                      {editTodoInput !== todo._id ? (
                        <div className="flex justify-between w-100% bg-secondary p-1 rounded-lg px-4">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={todo.isComplete}
                              onChange={(e) => handleTodoChecked(e, todo._id)}
                            />
                            <label
                              className={
                                todo.isComplete ? "line-through" : null
                              }
                            >
                              {todo.title}
                            </label>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() =>
                                handleDeleteTodo(todo._id, task._id)
                              }
                              variant="outlet"
                              className="text-destructive transition-all hover:scale-110"
                            >
                              <Trash2 className="text-destructive " />
                            </button>
                            <button
                              variant="outlet"
                              className="text-primary transition-all  hover:scale-110"
                              onClick={() => setEditTodoInput(todo._id)}
                            >
                              <Pencil className="text-primary" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) =>
                            handleUpdateTodo(e, todo._id, task._id)
                          }
                          className="flex justify-between w-100% bg-secondary p-1 rounded-lg px-4 "
                        >
                          <Input
                            className="w-[70%]"
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                            type="text"
                            placeholder="Enter new todo title..."
                          />
                          <button className="text-primary">
                            <Vote size={20} className="text-primary" />
                          </button>
                        </form>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No todos yet...</p>
            )}
            <form
              onSubmit={(e) => handleCreateTodo(e, task._id)}
              className="bg-secondary flex flex-col gap-2 p-3"
            >
              <h1 className="text-center font-bold">Add todo</h1>
              <Input
                type="text"
                value={createNewTodoTitle}
                onChange={(e) => setCreateNewTodoTitle(e.target.value)}
                placeholder="Enter new todo..."
              />
              <Button>Add</Button>
            </form>
          </div>
        </div>
        <div className="flex gap-4 absolute top-0 right-4">
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
            onClick={() => setEditTaskInputs(!editTaskInputs)}
          >
            <Pencil className="text-primary" />
          </Button>
          <div>
            <input
              id="pinned"
              className="hidden"
              type="checkbox"
              checked={task.isPinned}
              onChange={(e) => {
                handlePinnedChange(e, task._id);
              }}
            />
            {task.isPinned ? (
              <label htmlFor="pinned">
                <div>
                  <PinOff className="text-primary size-10 border border-primary rounded-sm px-1 py-1.5 hover:bg-primary/90 cursor-pointer" />
                </div>
              </label>
            ) : (
              <label htmlFor="pinned">
                <div className={""}>
                  <Pin className="text-primary size-10 border border-primary rounded-md px-1 py-1.5 hover:bg-primary/90 cursor-pointer" />
                </div>
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetailsPage;
