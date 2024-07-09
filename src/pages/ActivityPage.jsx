import ActivityTable from "@/components/react-omponenets/ActivityTable";
import TasksTableSkeleton from "@/components/react-omponenets/TableSkeleton";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/services/api.service";
import React, { useEffect, useState } from "react";

function ActivityPage() {
  const [activities, setActivities] = useState([]);
  const { loggedInUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchActivities() {
      try {
        const { data: fetchedActivities } = await api.get("/activity");
        setActivities(fetchedActivities);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchActivities();
  }, []);

  return (
    <>
      {loading ? (
        <TasksTableSkeleton />
      ) : (
        <div>
          <h1 className="text-5xl text-center font-extrabold my-8">
            {loggedInUser && loggedInUser.firstName}'s Activity
          </h1>
          <ActivityTable activities={activities} />
        </div>
      )}
    </>
  );
}

export default ActivityPage;
