"use client";

import { useEffect, useState } from "react";
// import { Experience } from "./Experience";
import Dashboard from "./dashboard/userDashboard";
import Auth from "./auth/Auth";

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    }else {
      setLoading(false); // Ensure loading is set to false if no token exists
    }
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }
 

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {isAuthenticated ? <Dashboard /> : <Auth setIsAuthenticated={setIsAuthenticated} />}
    </main>
  );
}
