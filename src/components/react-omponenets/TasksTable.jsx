import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Pin, QrCode } from "lucide-react";

function TasksTable() {
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const pinnedTasks = loggedInUserTasks.filter((task) => task.isPinned);
  const otherTasks = loggedInUserTasks.filter((task) => !task.isPinned);
  return (
    <Table>
      <TableCaption>A list of your Tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary text-xl font-bold">Task</TableHead>
          <TableHead className="text-primary text-xl font-bold">
            Description
          </TableHead>
          <TableHead className="text-primary text-xl font-bold">
            isPinned
          </TableHead>
          <TableHead className="text-primary text-xl font-bold">
            Details
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pinnedTasks.map((task) => {
          return (
            <TableRow key={task._id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell className="flex justify-left">
                {task.isPinned && <Pin color="#0008ff" />}
              </TableCell>
              <TableCell>
                <Link to={`/tasks/${task._id}`}>
                  <Button>
                    <QrCode color="#ffffff" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
        {otherTasks.map((task) => {
          return (
            <TableRow key={task._id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell className="flex justify-left">
                {task.isPinned && <Pin color="#0008ff" />}
              </TableCell>
              <TableCell>
                <Link to={`/tasks/${task._id}`}>
                  <Button>
                    <QrCode color="#ffffff" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default TasksTable;
