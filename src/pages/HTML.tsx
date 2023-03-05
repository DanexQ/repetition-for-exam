import { useContext, useEffect, useLayoutEffect } from "react";
import * as S from "../assets/StyledComponents";
import DocumentStructure from "../components/HTML/DocumentStructure";
import MostImportant from "../components/HTML/MostImportant";
import PageStructure from "../components/HTML/PageStructure";
import WhatIsHTML from "../components/HTML/WhatIsHTML";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const HTML = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useLayoutEffect(() => {
    setCurrentLocation("html");
  }, []);

  return (
    <S.Container>
      <WhatIsHTML />
      <DocumentStructure />
      <PageStructure />
      <MostImportant />
    </S.Container>
  );
};

export default HTML;
