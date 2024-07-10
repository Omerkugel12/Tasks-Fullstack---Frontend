import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/contexts/ModalContext";
import { ModeToggle } from "../ui/mode-toggle";
import { Archive, BookOpenText, ListChecks, Underline } from "lucide-react";

function NavBar() {
  const { loggedInUser } = useAuth();
  const { setModal } = useModalContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function TopNavLink(props) {
    const { href, children } = props;
    return (
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? { fontSize: "1.5em", textDecoration: "underline" }
            : {};
        }}
        to={href}
        className="text-xl font-bold flex items-end justify-center gap-1"
      >
        {children}
      </NavLink>
    );
  }
  return (
    <nav className="bg-primary flex justify-between p-2 px-4 sm:px-6 md:px-10 lg:px-20 items-center">
      <h1 className="text-3xl font-bold text-background flex flex-row-reverse gap-2 items-center">
        <Link to="/">Tasking</Link> <ListChecks className="size-8" />
      </h1>
      <div className="flex items-center">
        {/* Hamburger menu for mobile */}
        <button
          className="block sm:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:gap-6 items-center mt-4 sm:mt-0`}
        >
          <TopNavLink href="/about">
            <BookOpenText className="size-6" /> About
          </TopNavLink>
          {!loggedInUser ? (
            <>
              <li>
                <TopNavLink href="/auth/login">Login</TopNavLink>
              </li>
              <li>
                <TopNavLink href="/auth/register">Register</TopNavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <TopNavLink href="/tasks">Tasks</TopNavLink>
              </li>
              <li>
                <TopNavLink href="/tasks/archive">
                  <Archive className="size-6" /> Archive
                </TopNavLink>
              </li>
              <li>
                <TopNavLink href="/tasks/activity">Activity</TopNavLink>
              </li>
              <Button
                onClick={() => setModal("logout")}
                className="text-xl text-muted font-bold text-white"
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
          )}
          <ModeToggle />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
