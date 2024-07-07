import { Pencil, Trash2, Vote } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import TodoItem from "./TodoItem";

function TodoList({
  task,
  editTodoInput,
  createNewTodoTitle,
  setEditTodoInput,
  handleTodoChecked,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCreateTodo,
  newTodoTitle,
  setCreateNewTodoTitle,
  setNewTodoTitle,
}) {
  return (
    <div className="bg-white py-4 rounded-lg flex flex-col px-10 gap-4">
      {task.todoList.length > 0 ? (
        <ul className="flex flex-col space-y-4">
          {task.todoList.map((todo) => {
            return (
              <TodoItem
                key={todo._id}
                task={task}
                todo={todo}
                editTodoInput={editTodoInput}
                setEditTodoInput={setEditTodoInput}
                handleTodoChecked={handleTodoChecked}
                handleDeleteTodo={handleDeleteTodo}
                handleUpdateTodo={handleUpdateTodo}
                newTodoTitle={newTodoTitle}
                setNewTodoTitle={setNewTodoTitle}
              />
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
  );
}

export default TodoList;
