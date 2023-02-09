import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const ProtectedRoute = ({ lang }: { lang: string }) => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation(lang);
  }, []);
  return <></>;
};

export default ProtectedRoute;
