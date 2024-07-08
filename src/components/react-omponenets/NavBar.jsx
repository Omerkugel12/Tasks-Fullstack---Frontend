import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/contexts/ModalContext";
import { ModeToggle } from "../ui/mode-toggle";

function NavBar() {
  const { loggedInUser } = useAuth();
  const { setModal } = useModalContext();
  return (
    <nav className="bg-primary flex justify-between p-6 px-20 items-center ">
      <h1 className="text-3xl font-bold text-background">
        <Link to="/">Tasking</Link>
      </h1>
      <ul className="flex gap-6 items-center">
        <li className="text-xl text-muted font-bold">
          <Link to="/about">About</Link>
        </li>
        {loggedInUser === null ? (
          <>
            <li className="text-xl text-muted font-bold">
              <Link to="/auth/login">Login</Link>
            </li>
            <li className="text-xl text-muted font-bold">
              <Link to="/auth/register">Register</Link>
            </li>
          </>
        ) : null}

        {loggedInUser ? (
          <>
            <li className="text-xl text-muted font-bold">
              <Link to="/tasks">Tasks</Link>
            </li>
            <Button
              onClick={() => setModal("logout")}
              className="text-xl text-muted font-bold "
              variant="destructive"
            >
              Logout
            </Button>
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
      <ModeToggle />
    </nav>
  );
}

export default NavBar;
