import * as S from "../../assets/StyledComponents";

const SQLSyntaxTypes = () => {
  return (
    <S.Section id="skladnie">
      <S.SectionTitle>Składnia języka SQL</S.SectionTitle>
      <S.SectionContent>
        SQL dzieli się na kilka pogrup, które mają różne zastosowania:
      </S.SectionContent>
      <S.SubTitle>DDL (Data Definition Language)</S.SubTitle>
      <S.SectionContent>
        Język definiowania danych stosowany do tworzenia schematu danych. Służy
        do tworzenia, modyfikowania i usuwania obiektów bazy danych. Przykładowe
        polecenia: <S.SpanBold> CREATE, ALTER, DROP, TRUNCATE</S.SpanBold>.
      </S.SectionContent>
      <S.SubTitle>DCL (Data Control Language)</S.SubTitle>
      <S.SectionContent>
        Język kontrolujący dostęp do danych, nadaje lub odbiera uprawnienia
        użytkownikom. Przykładowe polecenia:{" "}
        <S.SpanBold>GRANT, DENY, REVOKE</S.SpanBold>.
      </S.SectionContent>
      <S.SubTitle>DQL (Data Query Language)</S.SubTitle>
      <S.SectionContent>
        Głównym zadaniem tego języka jest pobieranie informacji spełniających
        określone warunki. Przykładowe polecenia:{" "}
        <S.SpanBold>SELECT</S.SpanBold>.
      </S.SectionContent>
      <S.SubTitle>TCL (Transaction Control Language)</S.SubTitle>
      <S.SectionContent>
        Ten język służy do zarządzania transakcjami w bazie danych. Przykładowe
        polecenia:
        <S.SpanBold> COMMIT, ROLLBACK, SAVEPOINT</S.SpanBold>.
      </S.SectionContent>
    </S.Section>
  );
};

export default SQLSyntaxTypes;
