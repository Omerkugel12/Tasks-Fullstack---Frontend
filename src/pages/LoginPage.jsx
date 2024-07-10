import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

function LoginPage() {
  const { login } = useAuth();

  function handleLoginSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { username, password };

    login(data);
  }

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
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
              <Link>Sign-in</Link>
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div>
            <p>
              Don'nt have an account yet?{" "}
              <Link to={"/auth/register"} className="text-primary underline">
                Register
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginPage;
