import { createContext, useState, useContext } from "react";

const loggedInUserTasksContext = createContext(null);

export function LoggedInUserTasksProvider({ children }) {
  const [loggedInUserTasks, setLoggedInUserTasks] = useState([]);

  return (
    <loggedInUserTasksContext.Provider
      value={{ loggedInUserTasks, setLoggedInUserTasks }}
    >
      {children}
    </loggedInUserTasksContext.Provider>
  );
}

export function useLoggedInUserTasks() {
  const context = useContext(loggedInUserTasksContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}
