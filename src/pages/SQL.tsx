import { useContext, useEffect } from "react";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import * as S from "../assets/StyledComponents";
import WhatIsSQL from "../components/SQL/WhatIsSQL";
import SQLSyntaxTypes from "../components/SQL/SQLSyntaxTypes";
import AggregateFunctions from "../components/SQL/AggregateFunctions";
import TableRelationship from "../components/SQL/TableRelationships";
import TableConnection from "../components/SQL/TableConnection";

const MySQL = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("sql");
  }, []);

  return (
    <S.Container>
      <WhatIsSQL />
      <SQLSyntaxTypes />
      <AggregateFunctions />
      <TableRelationship />
      <TableConnection />
    </S.Container>
  );
};

export default MySQL;
