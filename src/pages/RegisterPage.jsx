import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

function RegisterPage() {
  const { register } = useAuth();

  function handleRegisterSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { username, email, password, firstName, lastName };
    register(data);
  }

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <Label>First name:</Label>
              <Input
                name="firstName"
                type="text"
                placeholder="Enter first name..."
              ></Input>
            </div>
            <div>
              <Label>Last name:</Label>
              <Input
                name="lastName"
                type="text"
                placeholder="Enter last name..."
              ></Input>
            </div>
            <div>
              <Label>Email:</Label>
              <Input
                name="email"
                type="text"
                placeholder="Enter email..."
              ></Input>
            </div>
            <div>
              <Label>Username:</Label>
              <Input
                name="username"
                type="text"
                placeholder="Enter username..."
              ></Input>
            </div>
            <div>
              <Label>Password:</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter Password..."
              ></Input>
            </div>
            <Button>
              <Link to={"/auth/login"}>Register</Link>
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p>
            Already have an account? <Link to={"/auth/login"}>Login</Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

export default RegisterPage;
