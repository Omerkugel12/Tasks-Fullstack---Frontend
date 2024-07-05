import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { loggedInUser, logout } = useAuth();
  return (
    <nav className="bg-slate-600 flex justify-between p-6 pl-32 items-center ">
      <h1 className="text-3xl font-bold">
        <Link to="/">Tasking</Link>
      </h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/about">About</Link>
        </li>
        {loggedInUser === null ? (
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        ) : null}
        {loggedInUser === null ? (
          <li>
            <Link to="/auth/register">Register</Link>
          </li>
        ) : null}
        {loggedInUser ? (
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        ) : null}
        {loggedInUser ? <li onClick={logout}>Logout</li> : null}
      </ul>
    </nav>
  );
}

export default NavBar;
