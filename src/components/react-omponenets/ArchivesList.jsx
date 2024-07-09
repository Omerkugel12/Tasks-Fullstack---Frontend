import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import ArchiveItem from "./ArchiveItem";

function ArchivesList({
  archives,
  modal,
  deleteModal,
  setDeleteModal,
  handleReturnToTasks,
}) {
  return (
    <ul className="flex  flex-wrap gap-4">
      {archives.map((archive) => (
        <ArchiveItem
          key={archive._id}
          modal={modal}
          deleteModal={deleteModal}
          archive={archive}
          setDeleteModal={setDeleteModal}
          handleReturnToTasks={handleReturnToTasks}
        />
      ))}
    </ul>
  );
}

export default ArchivesList;
