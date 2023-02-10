import { useEffect, useState } from "react";

const useGetHashLocation = () => {
  const [hashLocation, setHashLocation] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHashLocation(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hashLocation };
};

export default useGetHashLocation;
