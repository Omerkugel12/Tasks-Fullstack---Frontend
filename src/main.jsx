import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { LoggedInUserTasksProvider } from "./contexts/loggedInUserTasksContext.jsx";
import { ThemeProvider } from "./components/ui/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <LoggedInUserTasksProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <App />
            </ThemeProvider>
          </LoggedInUserTasksProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
