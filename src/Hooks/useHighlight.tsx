import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-php.js";
import "prismjs/components/prism-sql.js";

export const useHighlight = () => {
  return () =>
    useEffect(() => {
      Prism.highlightAll();
    }, []);
};
