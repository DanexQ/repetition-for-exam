import React, { createContext, useState } from "react";
import { navbarRawElements } from "../const/ElementsForNavbar";

interface CurrentLocationContextType {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
  currentLocationColor: string;
}

export const CurrentLocationContext = createContext(
  {} as CurrentLocationContextType
);

export const CurrentLocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const currentLocationColor =
    currentLocation &&
    navbarRawElements.filter((el) => el.name === currentLocation)[0].color;

  return (
    <CurrentLocationContext.Provider
      value={{ currentLocation, setCurrentLocation, currentLocationColor }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
};
