import { useContext, useLayoutEffect } from "react";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import * as S from "../assets/StyledComponents";
import WhatIsSQL from "../components/SQL/WhatIsSQL";
import SQLSyntaxTypes from "../components/SQL/SQLSyntaxTypes";
import AggregateFunctions from "../components/SQL/AggregateFunctions";
import TableRelationship from "../components/SQL/TableRelationships";
import TableConnection from "../components/SQL/TableConnection";
import DataGrouping from "../components/SQL/DataGrouping";

const MySQL = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useLayoutEffect(() => {
    setCurrentLocation("sql");
  }, []);

  return (
    <S.Container>
      <WhatIsSQL />
      <SQLSyntaxTypes />
      <AggregateFunctions />
      <TableRelationship />
      <TableConnection />
      <DataGrouping />
    </S.Container>
  );
};

export default MySQL;
