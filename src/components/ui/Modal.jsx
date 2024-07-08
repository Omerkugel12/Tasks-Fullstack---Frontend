import { cn } from "@/lib/utils";
import React from "react";

function Modal({ children, className, success, failure }) {
  return (
    <div
      className={cn(
        " fixed top-28 -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-3xl border p-4 rounded-lg shadow-2xl z-50 bg-white",
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
