import { useContext, useEffect } from "react";
import WhatIsCSS from "../components/CSS/WhatIsCSS";
import * as S from "../assets/StyledComponents";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import IncludeCSS from "../components/CSS/IncludeCSS";
import Selectors from "../components/CSS/Selectors";
import MostPopular from "../components/CSS/MostPopular";

const CSS = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("css");
  }, []);

  return (
    <S.Container>
      <WhatIsCSS />
      <IncludeCSS />
      <Selectors />
      <MostPopular />
    </S.Container>
  );
};

export default CSS;
