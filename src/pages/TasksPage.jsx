import TasksList from "@/components/react-omponenets/TasksList";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useLoggedInUserTasks } from "@/contexts/loggedInUserTasksContext";
import api from "@/services/api.service";
import { Grid3X3, Grip, LayoutGrid } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function TasksPage() {
  const { loggedInUser } = useAuth();
  const { loggedInUserTasks, setLoggedInUserTasks } = useLoggedInUserTasks();
  const navigate = useNavigate();
  const [display, setDisplay] = useState("cards");

  const pinnedTasks = loggedInUserTasks.filter((task) => task.isPinned);
  const otherTasks = loggedInUserTasks.filter((task) => !task.isPinned);

  useEffect(() => {
    async function fetchLoggedInUserTasks() {
      try {
        const res = await api.get("/task");
        setLoggedInUserTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLoggedInUserTasks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ">
      <Link
        to={"/tasks/create"}
        className="absolute top-28 right-6  bg-primary p-4 rounded-xl text-secondary shadow-2xl hover:"
      >
        Create new task
      </Link>
      {display === "cards" ? (
        <Button
          onClick={() => setDisplay("table")}
          className="absolute top-28 left-6"
        >
          <Grid3X3 size={32} color="#ffffff" />
        </Button>
      ) : (
        <Button
          onClick={() => setDisplay("cards")}
          className="absolute top-28 left-6"
        >
          <LayoutGrid size={32} color="#ffffff" />
        </Button>
      )}
      <h1 className="text-5xl font-extrabold p-10">
        {loggedInUser && `${loggedInUser.firstName}'s Tasks`}
      </h1>
      {display === "cards" ? (
        <div className="flex flex-col gap-6 ">
          {pinnedTasks.length > 0 && (
            <>
              <div className="shadow-2xl p-8">
                <h2 className="text-center text-3xl font-bold mb-4">
                  Pinned Tasks
                </h2>
                <TasksList loggedInUserTasks={pinnedTasks} />
              </div>
            </>
          )}
          {otherTasks.length > 0 && (
            <>
              <div className="shadow-2xl p-8">
                <h2 className="text-center text-3xl font-bold mb-4">Tasks</h2>
                <TasksList loggedInUserTasks={otherTasks} />
              </div>
            </>
          )}
        </div>
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      {pinnedTasks.length === 0 && otherTasks.length === 0 && (
        <p>No Tasks yet...</p>
      )}
      <Outlet />
    </div>
  );
}

export default TasksPage;
