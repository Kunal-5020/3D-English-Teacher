"use client";

import { useEffect, useState } from "react";
import { Experience } from "./Experience";
import Auth from "./auth/Auth";


export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);



  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }
 

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {isAuthenticated ? <Experience /> : <Auth setIsAuthenticated={setIsAuthenticated} />}
    </main>
  );
}
