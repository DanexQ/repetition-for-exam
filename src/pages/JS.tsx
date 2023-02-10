import { useContext, useEffect } from "react";
import * as S from "../assets/StyledComponents";
import Prism from "prismjs";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import IncludeJsCode from "../components/JavaScript/IncludeJsCode";
import WhatIsJavaScript from "../components/JavaScript/WhatIsJavaScript";
import DeclaringVariables from "../components/JavaScript/DeclaringVariables";
import ConditionalStatements from "../components/JavaScript/ConditionalStatements";
import PoppingUpModals from "../components/JavaScript/PoppingUpModals";
import Loops from "../components/JavaScript/Loops";
import Functions from "../components/JavaScript/Functions";
import { BuiltInFunctions } from "../components/JavaScript/BuiltInFunctions";
import Events from "../components/JavaScript/Events";
import FormHandling from "../components/JavaScript/FormHandling";
import ChangeContent from "../components/JavaScript/ChangeContent";
import ChangeStyle from "../components/JavaScript/ChangeStyle";

const JS = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("javascript");
    Prism.highlightAll();
  }, []);

  return (
    <S.Container>
      <WhatIsJavaScript />
      <IncludeJsCode />
      <DeclaringVariables />
      <ConditionalStatements />
      <PoppingUpModals />
      <Loops />
      <Functions />
      <BuiltInFunctions />
      <Events />
      <FormHandling />
      <ChangeContent />
      <ChangeStyle />
    </S.Container>
  );
};

export default JS;
