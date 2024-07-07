import React from "react";
import { Pencil, Trash2, Vote } from "lucide-react";
import { Input } from "../ui/input";

function TodoItem({
  task,
  todo,
  editTodoInput,
  setEditTodoInput,
  handleTodoChecked,
  handleDeleteTodo,
  handleUpdateTodo,
  newTodoTitle,
  setNewTodoTitle,
}) {
  return (
    <li>
      {editTodoInput !== todo._id ? (
        <div className="flex justify-between w-100% bg-secondary p-1 rounded-lg px-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleTodoChecked(todo._id)}
            />
            <label className={todo.isComplete ? "line-through" : null}>
              {todo.title}
            </label>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => handleDeleteTodo(todo._id, task._id)}
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
          onSubmit={(e) => handleUpdateTodo(e, todo._id, task._id)}
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
}

export default TodoItem;
