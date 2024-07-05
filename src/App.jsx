import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts-pages/AuthLayout";
import TasksPage from "./pages/TasksPage";
import TaskDeatailsPage from "./pages/TaskDeatailsPage";
import TasksLayout from "./layouts-pages/TasksLayout";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/react-omponenets/NavBar";
import { useModalContext } from "./contexts/ModalContext";

function App() {
  const { loggedInUser } = useAuth();
  const { modal } = useModalContext();
  console.log(modal);
  function ProtectedLoggedInRoute({ children }) {
    // in real world, loggedInUser will consume from AuthContext
    if (loggedInUser === null) {
      return <Navigate to="/auth/login" />;
    }

    return children;
  }
  function ProtectedLoggedOutRoute({ children }) {
    // in real world, loggedInUser will consume from AuthContext
    if (loggedInUser) {
      return <Navigate to="/tasks" />;
    }

    return children;
  }
  return (
    <>
      <NavBar />
      {modal === "loggedInModal" ? <div>hiii</div> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/tasks"
          element={
            <ProtectedLoggedInRoute>
              <TasksLayout />
            </ProtectedLoggedInRoute>
          }
        >
          <Route index element={<TasksPage />} />
          <Route path=":taskId" element={<TaskDeatailsPage />} />
        </Route>

        <Route
          path="/auth"
          element={
            <ProtectedLoggedOutRoute>
              <AuthLayout />
            </ProtectedLoggedOutRoute>
          }
        >
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
