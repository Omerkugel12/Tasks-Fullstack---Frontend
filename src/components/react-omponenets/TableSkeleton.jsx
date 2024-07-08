import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function TasksTableSkeleton() {
  // Number of skeleton rows to render
  const skeletonRows = 5; // Adjust as needed

  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4 text-left"></th>
          <th className="p-4 text-left"></th>
          <th className="p-4 text-left"></th>
          <th className="p-4 text-left"></th>
        </tr>
      </thead>
      <tbody>
        {/* Render skeleton rows */}
        {Array.from({ length: skeletonRows }).map((_, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="p-4">
              <Skeleton className="h-4 w-[250px]" />
            </td>
            <td className="p-4">
              <Skeleton className="h-4 w-[200px]" />
            </td>
            <td className="p-4 flex justify-left">
              <Skeleton className="h-4 w-4 mr-2" />
            </td>
            <td className="p-4">
              <Skeleton className="h-4 w-4" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TasksTableSkeleton;
