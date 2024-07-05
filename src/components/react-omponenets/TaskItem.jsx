import { useAuth } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  return (
    <li className="flex flex-col border border-ring p-10 max-w-96 bg-secondary rounded-lg shadow-2xl space-y-4">
      <h1 className="text-2xl">{task.title}</h1>
      <p>{task.description}</p>
      <div>
        {/* <input type="checkbox" checked={task.isPinned} /> */}
        {task.isPinned ? (
          <Badge className="bg-background text-primary">Pinned</Badge>
        ) : null}
      </div>
      <Link to={`/tasks/${task._id}`}>
        <Button>More info</Button>
      </Link>
    </li>
  );
}

export default TaskItem;
