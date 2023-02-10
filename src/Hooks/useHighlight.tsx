import Prism from "prismjs";
import { useEffect } from "react";

export const useHighlight = () => {
  return () =>
    useEffect(() => {
      Prism.highlightAll();
    }, []);
};
