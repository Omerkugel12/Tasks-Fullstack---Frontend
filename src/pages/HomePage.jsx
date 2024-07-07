import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust import based on your project structure
import { useAuth } from "@/contexts/AuthContext";

function HomePage() {
  const { loggedInUser } = useAuth();

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Tasks App
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Organize your tasks with ease.
        </p>
        {!loggedInUser && (
          <div className="space-y-4">
            <Link to="/auth/login">
              <Button variant="primary" className="w-48">
                Login
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="secondary" className="w-48">
                Register
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Tasks App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="text-blue-500 w-16 h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2c1.1 0 2 .9 2 2v1h1a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h1V4a2 2 0 012-2z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800">
                Organize Tasks
              </h3>
              <p className="text-gray-600">
                Effortlessly manage your tasks and to-dos in one place.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="text-blue-500 w-16 h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 01.993.883L8 3v3h4V3a1 1 0 112 0v3a3 3 0 01-3 3H8a3 3 0 01-3-3V3a1 1 0 01.883-.993L6 2H7zm6 2H7a1 1 0 00-.993.883L6 5l.001 3.459c.625.242 1.126.757 1.417 1.441L8 10v6h4v-1.096a1.5 1.5 0 011.417-1.495L14 13h1.5a1.5 1.5 0 010 3H5.5a1.5 1.5 0 110-3H7V8l.001-.559A2.5 2.5 0 018.5 5h3a2.5 2.5 0 012.5 2.5V8h-1v3h-4V8h1v-.5a1.5 1.5 0 013 0V8h1v-.5A2.5 2.5 0 0013 5z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800">
                Collaborate Effectively
              </h3>
              <p className="text-gray-600">
                Share tasks and collaborate with team members effortlessly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <svg
                className="text-blue-500 w-16 h-16"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2h-1.5a.5.5 0 000 1H16a4 4 0 004-4V4a4 4 0 00-4-4H6a4 4 0 00-4 4v4a4 4 0 004 4h1.5a.5.5 0 000-1H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2.854 7.646a.5.5 0 01.146-.353l3-3a.5.5 0 01.708.708L4.707 7H10.5a.5.5 0 010 1H4.707l1.146 1.146a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M17.854 12.146a.5.5 0 01-.146.353l-3 3a.5.5 0 01-.708-.708L15.293 13H9.5a.5.5 0 010-1h5.793l-1.146-1.146a.5.5 0 11.708-.708l3 3z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-800">
                Stay Organized
              </h3>
              <p className="text-gray-600">
                Stay on track with reminders and due dates for tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Organizing Today
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of users managing their tasks effectively.
          </p>
          {!loggedInUser && (
            <Link to="/auth/register">
              <Button variant="primary" className="w-48">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
