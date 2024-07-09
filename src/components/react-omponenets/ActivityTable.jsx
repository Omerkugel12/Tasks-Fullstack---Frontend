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

function ActivityTable({ activities }) {
  return (
    <Table>
      <TableCaption>A list of your Activity.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary text-xl font-bold">
            Operation
          </TableHead>
          <TableHead className="text-primary text-xl font-bold">
            Description
          </TableHead>
          <TableHead className="text-primary text-xl font-bold">Date</TableHead>
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
  );
}

export default ActivityTable;
