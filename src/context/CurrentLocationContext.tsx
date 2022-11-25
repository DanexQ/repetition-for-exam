import React, { createContext, useState } from "react";

interface CurrentLocationContextType {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
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

  return (
    <CurrentLocationContext.Provider
      value={{ currentLocation, setCurrentLocation }}
    >
      {children}
    </CurrentLocationContext.Provider>
  );
};
