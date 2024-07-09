import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useModalContext } from "@/contexts/ModalContext";
import api from "@/services/api.service";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function ArchivePage() {
  const { loggedInUser } = useAuth();
  const [archives, setArchives] = useState([]);
  const [loading, setloading] = useState(false);
  const { modal } = useModalContext();
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    async function getArchives() {
      try {
        const { data: fetchedArchives } = await api.get("/archive");
        setArchives(fetchedArchives);
      } catch (error) {
        console.log(error);
      }
    }
    getArchives();
  }, []);

  async function deleteArchive(archiveId) {
    try {
      await api.delete(`/archive/${archiveId}`);
      setArchives(archives.filter((archive) => archive._id !== archiveId));
      setDeleteModal(false);
      setModal("successDelete");
      setTimeout(() => {
        setModal(null);
      }, 4000);
    } catch (error) {
      console.log(error);
      setModal("failureDelete");
      setTimeout(() => {
        setModal(null);
      }, 4000);
    }
  }

  async function handleReturnToTasks(archive, archiveId) {
    try {
      await api.post("/task", archive);
    } catch (error) {
      console.log(error);
    }

    try {
      await api.delete(`archive/${archive._id}`);
      setArchives(archives.filter((archive) => archive._id !== archiveId));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {deleteModal ? (
        <>
          <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
          <div className=" fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-5 border border-ring p-10 bg-secondary rounded-2xl ">
            <p className="text-xl">Are yo sure you want to delete this task?</p>
            <div className="flex justify-center gap-4">
              <Button
                variant="destructive"
                onClick={() => deleteArchive(deleteModal)}
              >
                Delete
              </Button>
              <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
            </div>
          </div>
        </>
      ) : null}
      <div>
        <h1 className="text-5xl text-center font-extrabold my-8">
          {loggedInUser && loggedInUser.firstName}'s Archive
        </h1>
        <ul className="flex  flex-wrap gap-4">
          {archives.map((archive) => (
            <li
              key={archive._id}
              className={
                modal === "logout" || deleteModal
                  ? "relative flex flex-col border border-ring p-2 min-w-[300px] w-80 h-40  bg-slate-700 opacity-70 rounded-lg shadow-2xl space-y-4"
                  : "relative flex flex-col border border-ring p-2 min-w-[300px] w-80 h-40 overflow-x-visible bg-secondary rounded-lg shadow-2xl space-y-4"
              }
            >
              <div>
                <h1 className="text-2xl font-bold">{archive.title}</h1>
                <p>{archive.description}</p>
              </div>
              <div className="flex justify-evenly">
                <Button
                  onClick={() => setDeleteModal(archive._id)}
                  variant="outline"
                  className="text-destructive border border-destructive hover:bg-destructive/90 "
                >
                  <Trash2 className="text-destructive hover:text-secondary" />
                </Button>
                <Button
                  onClick={() => handleReturnToTasks(archive, archive._id)}
                  variant="outline"
                  className="text-primary border border-primary hover:bg-primary/90 "
                >
                  return to tasks
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ArchivePage;
