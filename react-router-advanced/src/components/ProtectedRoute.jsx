// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Simulate auth check

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
