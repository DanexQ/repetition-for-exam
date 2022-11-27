import React from "react";
import styled from "styled-components";
import {
  SContainer,
  SSection,
  SSectionContent,
  SSectionImg,
  SSectionTitle,
} from "../assets/StyledComponents";

const JS = () => {
  return (
    <SContainer>
      <SSection>
        <SSectionTitle>Co to jest JavaScript?</SSectionTitle>
        <SSectionContent>
          JavaScript jest językiem skryptowym, najczęściej używany przy
          tworzeniu stron WWW, zapewniając interaktywność stron oraz obsługę
          zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych.
          Jest interpretowanym językiem programowania, więc nie musimy go
          kompilować żeby zobaczyć efekty naszego kodu. Warto zaznaczyć, że
          JavaScript działa po stronie klienta, a więc nie obciąża w żaden
          sposób nasz serwer.
        </SSectionContent>
      </SSection>
      <SSection>
        <SSectionTitle>Jak podłączyć skrypt do dokumentu HTML?</SSectionTitle>
        <SSectionContent>
          Aby zadziałał nasz skrypt napisany w języku JavaScript, musimy go
          odpowiednio podłączyć do dokumentu za pomocą znaczników. Jeżeli chcemy
          pisać skrypt w dokumencie:
        </SSectionContent>
        <img src="../podlaczeniejs.png" alt="Podłączenie 1" />
        <SSectionContent>
          Jeżeli chcemy nasz kod pisać w osobnym pliku (na egzaminie odradzam,
          żeby sobie głowy tym nie zawracać, a w przypadku błędu, żeby nie
          przeskakiwać z jednego pliku do drugiego, aby sprawdzać co jest nie
          tak) to musimy go podłączyć w taki sposób:
        </SSectionContent>
        {/* <SSectionImg>
          <img src="../podlaczeniejs3.png" alt="Podłączenie 1" />
        </SSectionImg> */}
        <SSectionContent>
          Atrybut src wskazuje adres naszego skryptu, który znajduje się w
          zewnętrznym pliku (nie ma go w dokumencie HTML), dlatego pomiędzy
          znacznikami nic nie wpisujemy, bo i tak nie zadziała.
        </SSectionContent>
      </SSection>
    </SContainer>
  );
};

export default JS;
