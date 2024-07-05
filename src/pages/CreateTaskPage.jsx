import { X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function CreateTaskPage() {
  return (
    <>
      <div className="fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-80"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-50 flex flex-col border border-ring p-10 max-w-96 bg-secondary rounded-lg shadow-2xl space-y-4">
        <Link className="fixed top-2 left-2" to={"/tasks"}>
          <X color="#ff0000" />
        </Link>
        <div>CreateTaskPage</div>
      </div>
    </>
  );
}

export default CreateTaskPage;
