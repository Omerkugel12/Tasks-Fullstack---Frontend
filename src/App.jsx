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
import Modal from "./components/ui/Modal";

function App() {
  const { loggedInUser } = useAuth();
  // console.log(loggedInUser);
  const { modal } = useModalContext();
  // console.log(modal);
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
      <div>
        {loggedInUser && modal === "loggedInModal" ? (
          <Modal success>Good morning: {loggedInUser.firstName}</Modal>
        ) : null}
        {modal === "loginFailure" ? (
          <Modal failure>Error logging in</Modal>
        ) : null}
        <NavBar />
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
            <Route path=":taskId" element={<TasksPage />}>
              <Route index element={<TaskDeatailsPage />} />
            </Route>
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
      </div>
    </>
  );
}

export default App;
