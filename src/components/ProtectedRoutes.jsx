import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoutes({ children }) {
  const { userLoggedIn, currentUser } = useAuth();

  const router = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      router("/admin/login");
    }
  }, [currentUser, router]);

  return <>{children}</>;
}
