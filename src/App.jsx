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
import CreateTaskPage from "./pages/CreateTaskPage";
import { Button } from "./components/ui/button";
import Footer from "./components/react-omponenets/Footer";
import IndicationModals from "./components/react-omponenets/IndicationModals";

function App() {
  const { loggedInUser } = useAuth();
  const { modal, setModal } = useModalContext();
  const { logout } = useAuth();

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
      <div
        className={
          modal === "logout"
            ? "fixed top-0 bottom-0 right-0 left-0 bg-slate-700 opacity-70 "
            : ""
        }
      ></div>
      {modal === "logout" ? (
        <Modal className="flex flex-col p-10 top-1/2 gap-10">
          <p className="text-xl">Are yo sure you want to logout?</p>
          <div className="flex justify-center gap-4">
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
            <Button onClick={() => setModal(null)}>Cancel</Button>
          </div>
        </Modal>
      ) : null}
      <div>
        <IndicationModals />
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
            <Route path="create" element={<TasksPage />}>
              <Route index element={<CreateTaskPage />} />{" "}
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
        <Footer />
      </div>
    </>
  );
}

export default App;
