import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Pin } from "lucide-react";
import { useModalContext } from "@/contexts/ModalContext";

function TaskItem({ task }) {
  const { modal } = useModalContext();
  return (
    <li
      className={
        modal === "logout"
          ? "relative flex flex-col border border-ring p-2 w-80 h-40 bg-slate-700 opacity-70 rounded-lg shadow-2xl space-y-4"
          : "relative flex flex-col border border-ring p-2 w-80 h-40 bg-secondary rounded-lg shadow-2xl space-y-4"
      }
    >
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <div></div>
      {task.isPinned ? (
        <Badge className="absolute bottom-4 right-5 bg-background text-primary flex gap-2">
          Pinned <Pin color="#0008ff" className="size-4" />
        </Badge>
      ) : null}

      <Link to={`/tasks/${task._id}`}>
        <Button className="absolute bottom-2 left-2">More info</Button>
      </Link>
    </li>
  );
}

export default TaskItem;
