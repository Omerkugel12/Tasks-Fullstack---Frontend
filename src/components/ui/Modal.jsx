import { cn } from "@/lib/utils";
import React from "react";

function Modal({ children, className, success, failure }) {
  return (
    <div
      className={cn(
        "fixed text-3xl top-12 left-1/2 border p-4 rounded-lg shadow-2xl z-10 bg-white",
        className,
        success && "text-green-600 border border-green-600",
        failure && "text-red-700 border border-red-700"
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
