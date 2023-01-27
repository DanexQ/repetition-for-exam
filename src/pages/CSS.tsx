import React, { useContext, useEffect } from "react";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const CSS = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("css");
  }, []);

  return <div>CSS</div>;
};

export default CSS;
