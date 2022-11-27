import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentLocation } = useContext(CurrentLocationContext);

  return (
    <>{!currentLocation ? <Navigate to="/" replace={true} /> : children}</>
  );
};

export default ProtectedRoute;
