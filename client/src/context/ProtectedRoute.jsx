import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../util/getToken";

export default function ProtectedRoute({ children }) {
  let token = getToken();

  console.log("token", token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
