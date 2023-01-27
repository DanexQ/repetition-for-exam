import { useContext, useEffect } from "react";
import {
  SContainer,
  SSection,
  SSectionContent,
  SSectionImg,
  SSectionTitle,
  SImg,
} from "../assets/StyledComponents";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const HTML = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("html");
  }, []);

  return (
    <SContainer>
      <SSection>
        <SSectionTitle>Co to jest HTML?</SSectionTitle>
        <SSectionContent>
          HTML czyli HyperText Markup Language (pol. hipertekstowy język
          znaczników) - jest to język służący do tworzenia dokumentów
          hipertekstowych oraz opisywania struktury informacji zawartych
          wewnątrz strony.{" "}
        </SSectionContent>
      </SSection>
      <SSection>
        <SSectionTitle>Prawidłowa struktura dokumentu</SSectionTitle>
        <SSectionContent>
          Prawidłowa struktura dokumentu HTML na egzaminie wygląda następująco.
          Zauważ, że fragment {"<"}!DOCTYPE html{">"} oznacza, że dokument jest
          zapisany w HTML5. Druga linijka deklaruje język witryny na język
          polski (pl-PL). Te dwie rzeczy są naprawdę ważne, bo są łatwe, a jak
          ich nie zrobimy to tracimy głupie punkty.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../HTML/strukturaHTML.png" alt="HTML" />
        </SSectionImg>
      </SSection>
      <SSection>
        <SSectionTitle>Późniejsza struktura dokumentu</SSectionTitle>
        <SSectionContent>
          Niech twój plik nie zawiera samych {"<div></div>"} jako podział
          strony, ponieważ jest to uważane za błąd i tracisz punkty. Zamiast
          tego używaj podanych znaczników, których warto się nauczyć sekcji
          (jeżeli o nich zapomnimy to divy są jedynym wyjściem):
        </SSectionContent>
        <SSectionImg>
          <SImg src="../HTML/strukturaHTML2.png" alt="HTML2" />
        </SSectionImg>
      </SSection>
      <SSection>
        <SSectionTitle>Zapamiętaj!</SSectionTitle>
        <SSectionContent>
          Na egzaminie pamiętaj o tym, że prawie wszystkie znaczniki muszę mieć
          swoje zamknięcie. Jedynym wyjątkiem jest {"<br>"} - przejście do
          następnej linii, {"<hr>"} - linia pozioma, {"<img>"} - zdjęcie i{" "}
          {"<input>"} - pole edytorskie, do którego wprowadzamy dane. Większość
          nazw znaczników pochodzi ze skrótów słów języka angielskiego.
          Wspomniane: {"<br>"} to break - przerwa, a {"<hr>"} to horizontal -
          poziomy, dlatego znajomość języka angielskiego będzie bardzo dużym
          ułatwieniem.
        </SSectionContent>
      </SSection>
    </SContainer>
  );
};

export default HTML;
