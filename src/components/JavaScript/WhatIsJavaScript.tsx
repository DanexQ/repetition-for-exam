import * as S from "../../assets/StyledComponents";

const WhatIsJavaScript = () => {
  return (
    <S.SSection>
      <S.SSectionTitle>Co to jest JavaScript?</S.SSectionTitle>
      <S.SSectionContent>
        JavaScript jest językiem skryptowym, najczęściej używany przy tworzeniu
        stron WWW, zapewniając interaktywność stron oraz obsługę zdarzeń,
        walidacji formularzy czy budowanie elementów nawigacyjnych. Jest
        interpretowanym językiem programowania, więc nie musimy go kompilować
        żeby zobaczyć efekty naszego kodu. Warto zaznaczyć, że JavaScript działa
        po stronie klienta, a więc nie obciąża w żaden sposób nasz serwer.
      </S.SSectionContent>
    </S.SSection>
  );
};

export default WhatIsJavaScript;
