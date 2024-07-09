import { useAuth } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/services/api.service";

function ActivityPage() {
  const [activities, setActivities] = useState([]);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    async function fetchActivities() {
      try {
        const { data: fetchedActivities } = await api.get("/activity");
        setActivities(fetchedActivities);
      } catch (error) {
        console.log(error);
      }
    }
    fetchActivities();
  });

  return (
    <>
      <h1>{loggedInUser && loggedInUser.firstName}'s Activity</h1>
      <Table>
        <TableCaption>A list of your Tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primary text-xl font-bold">
              Operation
            </TableHead>
            <TableHead className="text-primary text-xl font-bold">
              Description
            </TableHead>
            <TableHead className="text-primary text-xl font-bold">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => {
            return (
              <TableRow key={activity._id}>
                <TableCell>{activity.operation}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>{activity.createdAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default ActivityPage;
