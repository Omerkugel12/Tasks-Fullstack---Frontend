import { useAuth } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Link, useParams } from "react-router-dom";
import { Pin } from "lucide-react";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";

function TaskItem({ task }) {
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();

  return (
    <li className="relative flex flex-col border border-ring p-10 w-96 h-72 bg-secondary rounded-lg shadow-2xl space-y-4">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <div></div>
      {task.isPinned ? (
        <Badge className="absolute bottom-10 right-10 bg-background text-primary flex gap-2">
          Pinned <Pin color="#0008ff" className="size-4" />
        </Badge>
      ) : null}

      <Link to={`/tasks/${task._id}`}>
        <Button className="absolute bottom-9 left-10">More info</Button>
      </Link>
    </li>
  );
}

export default TaskItem;
