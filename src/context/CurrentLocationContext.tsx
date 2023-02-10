import React, { createContext, useState } from "react";
import { navbarRawElements } from "../const/ElementsForNavbar";
import useGetHashLocation from "../Hooks/useGetHashLocation";

interface CurrentLocationContextType {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
  currentLocationColor: string;
  hashLocation: string;
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
  const { hashLocation } = useGetHashLocation();
  return (
    <CurrentLocationContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        currentLocationColor,
        hashLocation,
      }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
};
