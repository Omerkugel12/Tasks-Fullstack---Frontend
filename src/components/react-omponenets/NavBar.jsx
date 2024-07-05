import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  const { loggedInUser, logout } = useAuth();
  return (
    <nav className="bg-slate-600 flex justify-between p-6 pl-32 items-center ">
      <h1 className="text-3xl font-bold">
        <Link to="/">Tasking</Link>
      </h1>
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/about">About</Link>
        </li>
        {loggedInUser === null ? (
          <>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </>
        ) : null}

        {loggedInUser ? (
          <>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li onClick={logout} className="cursor-pointer">
              Logout
            </li>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-gray-950">
                {loggedInUser.username.charAt(0)}
              </AvatarFallback>
              <span className="text-2xl">
                {loggedInUser.username.charAt(0)}
              </span>
            </Avatar>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default NavBar;
