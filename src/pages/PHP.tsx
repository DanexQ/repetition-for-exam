import Prism from "prismjs";
import { useContext, useEffect, useLayoutEffect } from "react";
import * as S from "../assets/StyledComponents";
import ConditionalStatements from "../components/PHP/ConditionalStatements";
import DeclaringVariables from "../components/PHP/DeclaringVariables";
import IncludePHPCode from "../components/PHP/IncludePHPCode";
import WhatIsPHP from "../components/PHP/WhatIsPHP";
import WorkingWithCookies from "../components/PHP/WorkingWithCookies";
import WorkingWithDB from "../components/PHP/WorkingWithDB";
import WorkingWithForms from "../components/PHP/WorkingWithForms";
import WorkingWithPHPFile from "../components/PHP/WorkingWithPHPFile";
import WorkingWithSessions from "../components/PHP/WorkingWithSessions";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const PHP = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useLayoutEffect(() => {
    setCurrentLocation("php");
    Prism.highlightAll();
  }, []);

  return (
    <S.Container>
      <WhatIsPHP />
      <IncludePHPCode />
      <DeclaringVariables /> <ConditionalStatements />
      <WorkingWithDB />
      <WorkingWithForms />
      <WorkingWithCookies />
      <WorkingWithSessions />
      <WorkingWithPHPFile />
    </S.Container>
  );
};

export default PHP;
