import React, { useContext, useEffect } from "react";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const MySQL = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("mysql");
  }, []);

  return <div>SQL</div>;
};

export default MySQL;
